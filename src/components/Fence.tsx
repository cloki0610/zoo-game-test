import { useEffect } from "react";
import { motion } from "framer-motion";
import { useZoo } from "../hooks/useZoo";
import { fadeIn } from "../utils/motion";
import AnimalCard from "./AnimalCard";

interface FenceProps {
  remain: number;
  resetTimer: () => void;
}

function Fence({ remain, resetTimer }: FenceProps) {
  // useZoo (custom hook): to manage the data for current zoo component
  // It will expose 3 function to reset
  const { zoo, feedAnimal, healthReduce } = useZoo(5, 5, 5);
  // useEffect hook: to check the remain props, if it is no remain time(<=0),
  // Then health will reduce because time pass and update conditions
  useEffect(() => {
    if (remain <= 0) {
      healthReduce();
      resetTimer();
    }
  }, [healthReduce, resetTimer, zoo, remain]);

  // Design consideration: First the feed all animal button should on the top for better experience.
  // Then I try my best to generate a image to decorate this section.
  // Animation also added to make the container fade in from bottom.
  return (
    <motion.div
      variants={fadeIn("down", "spring", 0, 1)}
      initial="hidden"
      animate="show"
      className="p-8 mx-auto my-20 rounded-lg bg-main-image w-[80%] shadow-[1px_1px_8px_4px_rgba(12,5,32,0.6)] text-center"
    >
      <div className="mb-8 h-20">
        <button
          className="bg-[#a16b47] text-white p-3 rounded-md transition-all hover:scale-110"
          onClick={() => zoo.forEach((_, i) => feedAnimal(i))}
        >
          Feed All Animals
        </button>
      </div>
      <ul className="flex justify-center items-center flex-wrap gap-3 mt-10">
        {zoo.map((animal, i) => (
          <AnimalCard
            key={`animal-${i}`}
            animal={animal}
            animalIndex={i}
            onFeed={feedAnimal}
          />
        ))}
      </ul>
    </motion.div>
  );
}

export default Fence;
