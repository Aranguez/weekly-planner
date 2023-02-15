import { FC } from 'react'

import { Task } from 'types'

export type Props = {
  tasks: Task[]
}

const TodoList: FC<Props> = ({ tasks }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
