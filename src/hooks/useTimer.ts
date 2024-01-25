import { useEffect, useState } from "react";

export const useTimer = (time: number) => {
  // State to store current remain time
  const [remain, setRemain] = useState(time);
  // Function to reset timer to initial time
  const resetTimer = () => setRemain(time);
  // useEffect: to create a interval to count the time by updating state
  useEffect(() => {
    const nextUpdate = setInterval(() => {
      setRemain((prevRemain) => prevRemain - 1000);
    }, 1000);
    return () => clearInterval(nextUpdate);
  }, []);
  return { remain, resetTimer };
};
