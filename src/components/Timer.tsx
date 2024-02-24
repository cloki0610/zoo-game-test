import { useState, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { GameContext } from "../store/GameContext";
import { fadeIn, slideIn } from "../utils/motion";

const Timer = () => {
  // Get state from context
  const { time, remain } = useContext(GameContext);
  const [displayTimer, setDisplayTimer] = useState<boolean>(false);
  const toggleTimer = () => setDisplayTimer((prevState) => !prevState);
  const min = Math.floor(remain / 1000 / 60);
  const sec = remain / 1000 - min * 60;

  return (
    <motion.div animate={{ height: displayTimer ? 200 : 100 }}>
      <div className="w-[80%] mx-auto text-center my-5">
        <button
          className="bg-[#a16b47] text-white p-3 rounded-md transition-all hover:scale-110"
          onClick={toggleTimer}
        >
          {displayTimer ? "Hide" : "Show"} Timer
        </button>
      </div>
      <AnimatePresence mode="wait">
        {displayTimer && (
          <motion.div
            variants={slideIn("left", "spring", 0, 0.5)}
            initial="hidden"
            animate="show"
            exit="quit"
            className="p-8 rounded-lg bg-[#a16b47] w-[80%] shadow-[1px_1px_8px_4px_rgba(12,5,32,0.6)] 
      text-center mx-auto"
          >
            <motion.div
              variants={fadeIn("down", "spring", 0, 1)}
              initial="hidden"
              animate="show"
            >
              <span className="text-4xl font-bold text-white">Next Cycle:</span>
              <br />
              <span className="text-lg font-bold text-white">
                {min} min {sec} sec
              </span>
            </motion.div>
            <motion.progress
              variants={fadeIn("up", "spring", 0, 1)}
              initial="hidden"
              animate="show"
              max={time}
              value={remain}
              className="w-full [&::-webkit-progress-value]:bg-gradient-to-r from-teal-400 to-teal-700
          [&::-webkit-progress-value]:transition-[width] [&::-webkit-progress-value]:ease-in-out 
          [&::-webkit-progress-value]:duration-500"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Timer;
