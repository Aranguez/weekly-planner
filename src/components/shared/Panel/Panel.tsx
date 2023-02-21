import { FC, PropsWithChildren } from "react";

type Props = {
  classes?: string[]
} & PropsWithChildren;

const Panel: FC<Props> = ({ children, classes = [] }) => {
  return (
    <div className={classes.join(' ')}>
      {children}
    </div>
  )
}

export default Panel