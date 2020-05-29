// An Abstract class can implements interfaces. While an interface cannot implements another interface.

// Differences between an abstract class and a traditional class is that you can't instance an abstract class.

abstract class AssetTwo {
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  getCoords(): string {
    return `${this.x}, ${this.y}`;
  }
  // You can create abstract methods but they cant be implemented in the abstract class, they must be implemented in the subclasses
  abstract move(speed: number): boolean;
}

// They work as Inheritance does, the subclass extends from an abstract class.
class Police extends AssetTwo {
  // Abstract classes are useful when you want to use a template for some class and also you want to give it, so it will work as inheritance does, and you wont have to implement everything like using an interface, only the abstract things.
  constructor(x: number, y: number, width: number, height: number) {
    super(x, y, width, height);
  }

  // The abstract method move must be implemented.
  move(speed: number): boolean {
    throw new Error('Method not implemented.');
  }
}

// A cons using abstract classes, is that we are using Inheritance, so we cant inherit from other classes.
