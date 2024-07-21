import { FC } from 'react'

import { HiPlus } from "react-icons/hi2";

type Props = {
  handleChange: (e: any) => void;
  value: string;
  onSubmit: (e: any) => void;
}

const AddForm: FC<Props> = ({ handleChange, onSubmit, value }) => {
  return (
    <form className='flex gap-4 mt-12'>
      <input
        type="text"
        placeholder='Add a new task'
        className='border-slate-400 border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        onChange={handleChange} value={value} />
      <button
        className='p-3 bg-black text-white'
        type="button"
        onClick={onSubmit}
      >
        <HiPlus className='text-xl' />
      </button>
    </form>
  )
}

export default AddForm