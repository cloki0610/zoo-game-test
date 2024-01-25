import { Animal } from "./Animal";

// Class to create a new giraffe instance
export class Giraffe extends Animal {
  constructor(name: string) {
    super(name, "Giraffe");
  }

  // Methods to restore health, status will change if meet any condition
  increaseHealth(percent: number): void {
    // If giraffe is dead user cannot restore its health
    if (this._status === "Dead" || this._health === 0) return;
    // Calculate new health
    const amount: number = this._health * (percent / 100);
    this._health += amount;
    // Manage upperbound of health
    if (this._health > 100) {
      this._health = 100;
    }
  }

  // Methods to reduce health, status will change if meet any condition
  decreaseHealth(percent: number): void {
    // If giraffe is dead user cannot decrease its health
    if (this._status === "Dead" || this._health === 0) return;
    // Calculate new health
    const amount: number = this._health * (percent / 100);
    this._health -= amount;
    // Manage animal status and set lowerbound of health
    if (this._health < 50) {
      this._status = "Dead";
      this._health = 0;
    }
  }
}
