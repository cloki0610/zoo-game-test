import { useState, useEffect } from "react";
import { Animal } from "../Models/Animal";
import { Monkey } from "../Models/Monkey";
import { Giraffe } from "../Models/Giraffe";
import { Elephant } from "../Models/Elephant";
import { initAnimals } from "../utils/initAnimals";
import { randomNumber } from "../utils/randomNumber";

interface AnimalRate {
  monkey: number;
  giraffe: number;
  elephant: number;
}

export const useZoo = (
  monkeys: number,
  giraffes: number,
  elephants: number
) => {
  const [zoo, setZoo] = useState<Animal[]>([]);
  const [restoreRate, setRestoreRate] = useState<AnimalRate>({
    monkey: randomNumber(25, 10),
    giraffe: randomNumber(25, 10),
    elephant: randomNumber(25, 10),
  });

  // useEffect hook to initiate the default value of current zoo.
  useEffect(() => {
    const newZoo: Animal[] = initAnimals(monkeys, giraffes, elephants);
    setZoo(newZoo);
  }, [monkeys, giraffes, elephants]);

  // Function to reduce health of all animal in zoo
  const healthReduce = () => {
    const updatedZoo: Animal[] = [];
    for (const animal of zoo) {
      // A random value between 0 and 20 is to be generated for each animal to reduce their health.
      const reducePercent = randomNumber(20);
      // Update animal status
      const updatedAnimal = animal;
      updatedAnimal.decreaseHealth(reducePercent);
      // Put the updated instance to a new list
      updatedZoo.push(updatedAnimal);
    }
    setZoo(updatedZoo);
  };

  // Function to restore animals health, the rate will reset in the end of this action
  const feedAnimal = (AnimalIndex: number) => {
    // Get the instance from zoo state
    const updatedZoo = [...zoo];
    const updateAnimal = updatedZoo[AnimalIndex];
    // Check the instance type and restore its health with appropriate rate
    if (updateAnimal instanceof Monkey) {
      updateAnimal.increaseHealth(restoreRate.monkey);
    } else if (updateAnimal instanceof Giraffe) {
      updateAnimal.increaseHealth(restoreRate.giraffe);
    } else if (updateAnimal instanceof Elephant) {
      updateAnimal.increaseHealth(restoreRate.elephant);
    }
    updatedZoo[AnimalIndex] = updateAnimal;
    setRestoreRate({
      monkey: randomNumber(25, 10),
      giraffe: randomNumber(25, 10),
      elephant: randomNumber(25, 10),
    });
    setZoo(updatedZoo);
  };

  // Return zoo data, and functions to feed animals
  return { zoo, feedAnimal, healthReduce };
};
