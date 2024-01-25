// Return a random integer
export const randomNumber = (max: number, min: number = 0) =>
  Math.round(Math.random() * (max - min) + min);
