type Prop = { index?: number }

const Square: React.FC<Prop> = ({index}) => {
  return (
    <div onClick={() => console.log(index)} className="border-1 border-gray-400 rounded-[4px] w-[100px] h-[100px] flex justify-center items-center cursor-pointer">
      {}
    </div>
  )
}

export default Square