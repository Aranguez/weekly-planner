import { FC } from "react";

import { HiMoon, HiUser, HiAdjustmentsHorizontal } from "react-icons/hi2";

const Options: FC = () => {
  return (
    <div className='flex justify-between w-48 self-center'>
      <button><HiUser className='w-10 text-3xl' /></button>
      <button><HiMoon className='w-10 text-3xl' /></button>
      <button><HiAdjustmentsHorizontal className='w-10 text-3xl' /></button>
    </div>
  )
}

export default Options