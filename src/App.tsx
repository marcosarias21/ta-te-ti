import { Board } from './components/Board'
import { Square } from './components/Square'
import { Navbar } from './components/Navbar'

const App = () => {

  return (
    <>
    <Navbar />
    <section className='w-[100%] mt-40 flex flex-col justify-center items-center'>
      <div>
        <h1 className='text-2xl text-rose-500 tracking-wider'>TaTeTi</h1>
      </div>
      <div >
        <Board>
          {Array(9).fill('a').map((square, index) => <Square index={index} />)}
        </Board>
      </div>
      <div className='mt-2'>
        <p className='text-center mb-2'>Turnos:</p>
        <div className='flex gap-8'>
          <Square />
          <Square />
        </div>
      </div>
    </section>
    </>
  )
}

export default App
