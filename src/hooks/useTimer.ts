import { useEffect, useRef, useState } from 'react';
export default function useTimer(initial:number){
const [started,setStarted]=useState(false);
const [count, setCount] = useState(initial);
  const [running, setRunning] = useState(false);
  const timeRef = useRef<number | undefined>(undefined);
  useEffect(() => {
    if (count < 1 && running) {
      setRunning(false);
      const audio = new Audio('/bell-notification-337658.mp3');
      audio.play();
    }
  }, [count, running]);
  useEffect(() => {
    if (running) {
      timeRef.current = setInterval(() => {
        setCount((prev) => {
          if (prev <= 0) {
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timeRef.current);
  }, [running]);
  const handleStart = () => {
    if (count > 0) {
        setRunning(true);
        setStarted(true);
    };
  };

  const handleStop = () => {
    setRunning(false);
  };
  const handleReset = () => {
    setRunning(false);
    setCount(1500);
    setStarted(false);
  };
  const handleAddMinute=(minute:number) =>{
    setCount((prev) =>prev+minute);
  }
  const longBreak=()=>{
    setCount(900);
    setRunning(false);
    setStarted(false);
  }
    const shortBreak=()=>{
    setCount(300);
    setRunning(false);
    setStarted(false);
  }

  return{count, running,handleStart,handleReset,handleStop,handleAddMinute ,started,longBreak,shortBreak};
  }
