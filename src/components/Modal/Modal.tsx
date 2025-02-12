import { Square } from "../Square"

interface Prop {
  winner: string
  resetGame: () => void
  setOpenModal: (arg: boolean) => void
 }

const Modal: React.FC<Prop> = ({winner, resetGame, setOpenModal }) => {
  return (
    <div className="flex justify-center items-center absolute top-[50%] w-[350px]">
      <div className="p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <button type="button" onClick={() => setOpenModal(false)} className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 flex-col items-center text-center">
                <div className="flex justify-center">
                  {winner != 'Empate' ? 
                  <svg className="h-40 w-40 text-yellow-500 text-center"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/> 
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                    <line x1="7" y1="4" x2="17" y2="4" />
                    <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />  <circle cx="5" cy="9" r="2" />
                    <circle cx="19" cy="9" r="2" />
                  </svg>
                  : 'x'}
                </div>
                <div className="w-full flex-col items-center justify-items-center mb-4">
                  <div>
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{winner != 'Empate' && 'Ganador'}</h3>
                  </div>
                  <div className="text-center">
                    {winner != 'Empate' ? 
                    <Square>
                      <span className="text-3xl font-extrabold text-black">
                        {winner}
                      </span>
                    </Square> 
                    : <p className="text-black font-bold text-2xl">Empate</p>
                    }
                  </div>
                </div>
                <button onClick={resetGame} data-modal-hide="popup-modal" type="button" className="border-1 border-black text-black hover:bg-black transition-colors hover:text-white hover:border-1 hover:border-white hover:transition-colors font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                &#10227; Volver a empezar</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Modal