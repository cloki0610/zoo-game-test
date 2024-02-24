import { createContext } from "react";

import { Animal } from "../Models/Animal";
import { useTimer } from "../hooks/useTimer";
import { useZoo } from "../hooks/useZoo";

// Constant
const TIME = 60 * 60 * 1000;
// Type of Context
interface GameContextType {
  zoo: Animal[];
  remain: number;
  time: number;
  feedAnimal: (AnimalIndex: number) => void;
  healthReduce: () => void;
  resetTimer: () => void;
}
// Type of context wrapper
type BaseWrapper = {
  children: JSX.Element | JSX.Element[] | string;
};

// Create a new context with some blank initial values
export const GameContext = createContext<GameContextType>(
  {} as GameContextType
);

// Create a context provider for implementation
export default function GameProvider({ children }: BaseWrapper) {
  const { remain, resetTimer } = useTimer(TIME);
  const { zoo, feedAnimal, healthReduce } = useZoo(5, 5, 5);
  const time = TIME;

  const value = {
    remain,
    zoo,
    time,
    resetTimer,
    feedAnimal,
    healthReduce,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
