import { Board } from './components/Board'
import { Square } from './components/Square'
import { Navbar } from './components/Navbar'
import { useState } from 'react'

const TURNS = {
  x: 'X',
  o: 'O'
}

const App = () => {
  const [turn, setTurn] = useState<string>(TURNS.x);
  const [board, setBoard] = useState<string[]>(Array(9).fill(null))
  
  const handleTurn = () => {
   if (turn === TURNS.x) {
    setTurn(TURNS.o)
   } else {
    setTurn(TURNS.x)
   }
  }

  const updateBoard = (index: number) => {
    console.log(index)
    handleTurn()
  }

  return (
    <>
    <Navbar />
    <section className='w-[100%] mt-40 flex flex-col justify-center items-center'>
      <div>
        <h1 className='text-3xl font-medium text-rose-500 tracking-wider'>TaTeTi</h1>
      </div>
      <div >
        <Board>
          {board.map((square, index) => <Square updateBoard={updateBoard} key={index} index={index} />)}
        </Board>
      </div>
      <div className='mt-2'>
        <p className='text-center mb-2'>Turnos:</p>
        <div className='flex gap-8'>
          <Square classSelected={turn === TURNS.x ? 'bg-red-500' : ''}><p className='font-bold text-2xl'>{TURNS.x}</p></Square>
          <Square classSelected={turn === TURNS.o ? 'bg-red-500' : ''}><p className='font-bold text-2xl'>{TURNS.o}</p></Square>
        </div>
      </div>
    </section>
    </>
  )
}

export default App
