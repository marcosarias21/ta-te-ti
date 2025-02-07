import { ReactNode } from "react"

interface Prop {
  children: ReactNode
}

const Board: React.FC<Prop> = ({ children }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-2 p-5">
        {children}
      </div>
    </div>
  )
}

export default Board