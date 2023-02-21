import { FC } from "react"

import Options from "../Options"
import Title from "../Title"

const Header: FC = () => {
  return (
    <div className='flex grow justify-between mb-28'>
      <Title />
      <Options />
    </div >
  )
}

export default Header