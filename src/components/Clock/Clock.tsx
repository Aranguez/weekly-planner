import { useRef } from "react"


// TODO: hacer que se actualice en tiempo real
const Clock: React.FC = () => {
  const time = useRef(new Date())

  const hours = time.current.getHours()
  const minutes = time.current.getMinutes()

  return (
    <div className='w-full mb-28'>
      <h1 className='text-right text-3xl font-bold'>{hours}:{minutes < 10 ? '0' + minutes : minutes}</h1>
    </div>
  )
}

export default Clock