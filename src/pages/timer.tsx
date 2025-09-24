import { useState } from 'react';
import TimerControl from '../components/timerControl';
import TimerDisplay from '../components/timerDisplay';
import useTimer from '../hooks/useTimer';

export default function TimerPage() {
  const [isActive, setIsActive] = useState('focus');
  const {
    count,
    running,
    handleStart,
    handleReset,
    handleStop,
    handleAddMinute,
    started,
    longBreak,
    shortBreak,
  } = useTimer(1500);
  return (
    <div className="grid-rows-2 grid w-full h-screen gap-[10px] bg-[#000000]  p-[20px] sm:grid-cols-[2fr_3fr] sm:grid-rows-1 ">
      <div className="justify-center items-center flex flex-col bg-[#18181b] rounded-[15px] sm:order-2 sm:h-full">
        <div className="flex text-white">
          <button
            className={`cursor-pointer m-[7px]  ${
              isActive === 'focus' ? 'bg-[#27272a]' : 'bg-[#18181b]'
            }`}
            onClick={() => {
              handleReset();
              setIsActive('focus');
            }}
          >
            Focus
          </button>
          <button
            className={`cursor-pointer m-[7px] ${
              isActive === 'shortBreak' ? 'bg-[#27272a]' : 'bg-[#18181b]'
            }`}
            onClick={() => {
              shortBreak();
              setIsActive('shortBreak');
            }}
          >
            Short Break
          </button>
          <button
            className={`cursor-pointer m-[7px] ${
              isActive === 'longBreak' ? 'bg-[#27272a]' : 'bg-[#18181b]'
            }`}
            onClick={() => {
              longBreak();
              setIsActive('longBreak');
            }}
          >
            Long Breack
          </button>
        </div>
        <TimerDisplay count={count} />
        <TimerControl
          started={started}
          running={running}
          handleStart={handleStart}
          handleReset={handleReset}
          handleStop={handleStop}
          handleAddMinute={handleAddMinute}
        />
      </div>
      <div className="bg-[#18181b] rounded-[15px] sm:order-1 sm:h-full">s</div>
    </div>
  );
}
