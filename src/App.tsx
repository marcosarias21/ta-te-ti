import { Board } from './components/Board'
import { Square } from './components/Square'
import { Navbar } from './components/Navbar'
import { useState } from 'react'
import { Modal } from './components/Modal'

const TURNS = {
  x: 'X',
  o: 'O'
}

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

const App = () => {
  const [turn, setTurn] = useState<string>(TURNS.x);
  const [board, setBoard] = useState<string[]>(Array(9).fill(null))
  const [winner, setWinner] = useState<string>('')
  const [openModal, setOpenModal] = useState<boolean>(false)
  
  const handleTurn = () => {
   if (turn === TURNS.x) {
    setTurn(TURNS.o)
   } else {
    setTurn(TURNS.x)
   }
  }

  const checkWinner = (boardToCheck: string[]) => {
    for (const combo of WINNER_COMBOS) {
      const [a,b,c] = combo
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a]
      }
    }
  }

  const checkTie = (boardToCheck: string[]) : boolean => {
    return (boardToCheck.every(square => square !== null))
  }

  const updateBoard = (index: number) => {
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newWinner = checkWinner(newBoard)
    const isTie = checkTie(newBoard)
    handleTurn()
    if (newWinner) {
      setWinner(newWinner)
      setOpenModal(true)
    } else if (isTie == true) {
      setWinner('Empate')
      setOpenModal(true)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner('')
    setOpenModal(false)
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
          {board.map((square, index) => <Square updateBoard={updateBoard} key={index} index={index}><span className='text-3xl font-bold'>{square}</span></Square>)}
        </Board>
      </div>
      <div className='mt-2'>
        <p className='text-center mb-2'>Turnos:</p>
        <div className='flex gap-8'>
          <Square classSelected={turn === TURNS.x ? 'bg-red-500' : ''}><p className='font-bold text-2xl'>{TURNS.x}</p></Square>
          <Square classSelected={turn === TURNS.o ? 'bg-red-500' : ''}><p className='font-bold text-2xl'>{TURNS.o}</p></Square>
        </div>
      </div>
      <div className='mt-10'>
        <button onClick={resetGame} className="rounded-md py-6 px-6 flex items-center text-center border-1 border-white text-white text-md transition-all hover:bg-slate-100 hover:text-gray-950">&#10227;
        Volver a empezar</button>
      </div>
      {
        openModal ? <Modal setOpenModal={setOpenModal} winner={winner} resetGame={resetGame}/> : null
      }
    </section>
    </>
  )
}

export default App
