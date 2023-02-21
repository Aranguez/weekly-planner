import { Dispatch, FC, SetStateAction, useEffect } from "react";

type Props = {
  day: string;
  selectedDay: string;
  onSelect: Dispatch<SetStateAction<string>>
  amountOfTasks: number;
}

const DayBox: FC<Props> = ({ day, onSelect, selectedDay, amountOfTasks = 0 }) => {
  const handleClick = () => {
    onSelect(day)
  }

  return (
    <div className="relative w-44 h-44">
      <button
        onClick={handleClick}
        className={`
          w-full h-full
          z-20 relative
          border-2 border-solid border-black hover:border-4
          select-none
          ${selectedDay === day ? 'border-4' : ''}
        `}
      >
        {day}
      </button>
      <span
        className="w-full block absolute bg-red-500 bottom-0 left-0 transition-all duration-300 ease-in-out z-10"
        style={{ height: `${(amountOfTasks * 100) / 6}%` }}
      >
      </span>
    </div>

  )
}

export default DayBox