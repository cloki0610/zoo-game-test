import { motion } from "framer-motion";
import { Animal } from "../Models/Animal";
import monkeyIcon from "../assets/monkey-icon.png";
import giraffeIcon from "../assets/giraffe-icon.png";
import elephantIcon from "../assets/elephant-icon.png";
import { randomNumber } from "../utils/randomNumber";

interface AnimalProps {
  animal: Animal;
  animalIndex: number;
  onFeed: (AnimalIndex: number) => void;
}

function AnimalCard({ animal, animalIndex, onFeed }: AnimalProps) {
  // Display icon based on animal type
  let icon;
  switch (animal.type) {
    case "Elephant":
      icon = elephantIcon;
      break;
    case "Giraffe":
      icon = giraffeIcon;
      break;
    case "Monkey":
      icon = monkeyIcon;
      break;
    default:
      console.error("Incorrect animal type");
  }

  // Show different color base on animal status
  let iconClass = "w-[50%] rounded-full p-1 border-5 ";
  let detailClass =
    "flex flex-col font-mono font-medium rounded-b-lg text-white ";
  if (animal.status === "Healthy") {
    iconClass += "border-green-400";
    detailClass += "bg-green-400";
  } else if (animal.status === "Cannot Walk") {
    iconClass += "border-amber-400";
    detailClass += "bg-amber-400";
  } else {
    iconClass += "border-red-500";
    detailClass += "bg-red-500";
  }

  const content = (
    <>
      <div className="w-full h-[15rem] text-center flex justify-center items-center">
        {/* If animal is healthy, active the animation, else the animation will stop */}
        {animal.status === "Healthy" && (
          <motion.img
            animate={{ scale: [1, 0.9, 1] }}
            transition={{ repeat: Infinity, duration: 5 }}
            src={icon}
            className={iconClass}
          />
        )}
        {animal.status !== "Healthy" && (
          <img src={icon} className={iconClass} />
        )}
      </div>
      <div className={detailClass}>
        <progress
          max={100}
          value={animal.health}
          className="w-full [&::-webkit-progress-value]:bg-gradient-to-r from-amber-500 to-red-600 
          [&::-webkit-progress-value]:transition-[width] [&::-webkit-progress-value]:ease-in-out 
          [&::-webkit-progress-value]:duration-500"
        />
        <span className="font-bold text-2xl">{animal.name}</span>
        <span className="text-md">{animal.status}</span>
        <span className="text-md">{animal.health.toFixed(2)}%</span>
        <button
          className="group bg-[#a16b47] text-white p-3 rounded-b-md"
          onClick={() => onFeed(animalIndex)}
        >
          <span className="transition-all group-hover:text-sm">
            Feed {animal.name}
          </span>
        </button>
      </div>
    </>
  );

  // Design consideration: I want it simple and straight forward, so finally I just create a character card
  // to represent the animal data, it split to three part, first is the rounded icon in the center of the section.
  // Second part is HP bar with some linear gradiant color to make it more noticable.
  // The third part is the details with a feed button, the button should have some animation,
  // and the background color and the icon border should change base on the animal status.
  // If the animal is not healthy the animation of card and icon should shut down.
  return (
    <li>
      {animal.status === "Healthy" ? (
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, repeatDelay: randomNumber(10) }}
          className="lg:w-[20rem] w-[15rem] rounded-lg bg-white"
        >
          {content}
        </motion.div>
      ) : (
        <div className="lg:w-[20rem] w-[15rem] rounded-lg bg-white">
          {content}
        </div>
      )}
    </li>
  );
}

export default AnimalCard;
