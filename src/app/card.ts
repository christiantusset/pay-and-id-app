export default class Card {
    number: string;
    owner: string;
    brand: string;
    description: string;
    constructor(number: string, owner: string, brand: string, description: string) {
      this.number = number;
      this.owner = owner;
      this.brand = brand;
      this.description = description;
    }
  }