import { Animal } from "./Animal";

// Class to create a new elephant instance
export class Elephant extends Animal {
  constructor(name: string) {
    super(name, "Elephant");
  }

  // Methods to restore health, status will change if meet any condition
  increaseHealth(percent: number): void {
    // If elephant is dead user cannot restore its health
    if (this._status === "Dead") return;
    // Calculate new health
    const amount: number = this._health * (percent / 100);
    this._health += amount;
    // Manage animal status and set upperbound of health
    if (this._health > 100) {
      this._health = 100;
    }
    if (this._status === "Cannot Walk" && this._health > 70) {
      this._status = "Healthy";
    }
  }

  // Methods to reduce health, status will change if meet any condition
  decreaseHealth(percent: number): void {
    // If elephant is already illness, it is pronounced dead and health also be 0
    if (this._status === "Cannot Walk") {
      this._status = "Dead";
      this._health = 0;
      return;
    }
    // If elephant is dead user cannot decrease its health
    if (this._status === "Dead" || this._health === 0) return;
    // Calculate new health
    const amount: number = this._health * (percent / 100);
    this._health -= amount;
    // Manage animal status
    if (this._health < 70) {
      this._status = "Cannot Walk";
    }
  }
}
