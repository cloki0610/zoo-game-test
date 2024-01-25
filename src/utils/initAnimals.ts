import { Animal } from "../Models/Animal";
import { Elephant } from "../Models/Elephant";
import { Giraffe } from "../Models/Giraffe";
import { Monkey } from "../Models/Monkey";
import {
  elephantNames,
  giraffeNames,
  monkeyNames,
} from "../constants/ANIMAL_NAMES";

// Function to create a new array of Animals
export const initAnimals = (
  monkeys: number,
  giraffes: number,
  elephants: number
) => {
  // New array
  const newAnimals: Animal[] = [];
  // For each number of animals
  for (let i = 0; i < monkeys; i++) {
    newAnimals.push(new Monkey(monkeyNames[i]));
  }
  for (let i = 0; i < giraffes; i++) {
    newAnimals.push(new Giraffe(giraffeNames[i]));
  }
  for (let i = 0; i < elephants; i++) {
    newAnimals.push(new Elephant(elephantNames[i]));
  }

  // Return the created array
  return newAnimals;
};
