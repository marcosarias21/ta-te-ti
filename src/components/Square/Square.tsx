interface Prop { 
  index?: number
  children?: React.ReactNode
  classSelected?: string
  updateBoard?: (index: number) => void
}

const Square: React.FC<Prop> = ({index, children, classSelected, updateBoard}) => {
  const handleClick = () => {
    if (index != undefined && updateBoard) updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={`border-1 border-gray-400 rounded-[4px] w-[100px] h-[100px] flex justify-center items-center cursor-pointer ${classSelected}`}>
      {children}
    </div>
  )
}

export default Square