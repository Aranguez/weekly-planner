import { FC } from "react";

import { HiMoon, HiUser, HiAdjustmentsHorizontal } from "react-icons/hi2";

const Options: FC = () => {
  return (
    <div className='flex justify-between w-48 self-center'>
      <HiUser className='w-10 text-3xl' />
      <HiMoon className='w-10 text-3xl' />
      <HiAdjustmentsHorizontal className='w-10 text-3xl' />
    </div>
  )
}

export default Options