import { FC } from 'react'

import { Task } from '../../types'

import styles from './TodoList.module.css'

import { HiTrash, HiPencil } from "react-icons/hi2";

export type Props = {
  tasks: Task[]
}

const TodoList: FC<Props> = ({ tasks }) => {
  return (
    <div className='mt-5'>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between mb-3">
            <div className='flex items-center gap-4'>
              <label className={styles.label}>
                <input type="checkbox" className={styles.input} />
                <span className={styles.span}></span>
              </label>
              <span>{task.title}</span>
            </div>
            <div className='flex items-center gap-4'>
              <button><HiPencil className='text-xl' /></button>
              <button><HiTrash className='text-xl' /></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
