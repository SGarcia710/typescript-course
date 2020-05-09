class Car {
  private _brand: string;
  constructor(brand: string) {
    this._brand = brand;
  }

  get brand(): string {
    return this._brand;
  }
  set brand(brand: string) {
    this._brand = brand;
  }
}

let myCard = new Car('Audi');

// Using access methods:
// Set:
myCard.brand = 'BMW';

// Get:
console.log(myCard.brand);

// another example
class User {
  private _name: string;
  private _lastName: string;

  constructor(name: string, lastName: string) {
    this._name = name;
    this._lastName = lastName;
  }

  get fullName(): string {
    return `${this._name} ${this._lastName}`;
  }

  set fullName(fullName: string) {
    let words = fullName.split(' ');
    this._name = words[0];
    this._lastName = words[1];
  }
}

let myUser = new User('Sebastián', 'García');
console.log(myUser.fullName);
myUser.fullName = 'Gabriel Hernandez';
console.log(myUser.fullName);
