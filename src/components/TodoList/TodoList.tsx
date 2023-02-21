import { FC } from 'react'

import { Task } from '../../types'

import styles from './TodoList.module.css'

export type Props = {
  tasks: Task[]
}

const TodoList: FC<Props> = ({ tasks }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <label className={styles.label}>
              <input type="checkbox" className={styles.input} />
              <span className={styles.span}></span>
            </label>
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
