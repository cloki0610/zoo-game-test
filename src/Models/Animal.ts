// Types to limit animals type and status
export type AnimalStatus = "Healthy" | "Cannot Walk" | "Dead";
export type AnimalType = "Monkey" | "Giraffe" | "Elephant";

export abstract class Animal {
  // Abstract class for some common properties for all animal in zoo
  protected _name: string;
  protected _type: AnimalType;
  protected _health: number = 100;
  protected _status: AnimalStatus = "Healthy";

  constructor(name: string, type: AnimalType) {
    this._name = name;
    this._type = type;
  }

  // Getters & Setters
  get name(): string {
    return this._name;
  }
  get health(): number {
    return this._health;
  }
  get status(): AnimalStatus {
    return this._status;
  }
  get type(): AnimalType {
    return this._type;
  }
  // Methods to restore health, status will change if meet any condition
  abstract increaseHealth(percent: number): void;
  // Methods to reduce health, status will change if meet any condition
  abstract decreaseHealth(percent: number): void;
  // Reset all status
  reset() {
    this._health = 100;
    this._status = "Healthy";
  }
}
