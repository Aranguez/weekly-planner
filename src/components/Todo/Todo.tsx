import { FC } from 'react'

type Props = {
  title: string
  onEdit: () => void
  onDelete: () => void
}

const Todo: FC<Props> = ({ title, onEdit, onDelete }) => {
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default Todo
