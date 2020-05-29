// An Interface can't implements another interface.

interface Asset {
  x: number;
  y: number;
  width: number;
  height: number;

  getCoords(): string;
}

class Hero implements Asset {
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
    return 'Method not implemented.';
  }
}

class Bullet implements Asset {
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
    return 'Method not implemented.';
  }
}

class Enemy implements Asset {
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
    return 'Method not implemented.';
  }
}

class SpaceBullet extends Bullet {}

// we can do this because Bullet implements Asset
let mySpaceBullet: Asset = new SpaceBullet(12, 12, 12, 12);

class Collisions {
  // Receiving the interface as type, we secure that at least the objects has implemented all the interface structure.
  // We use Interfaces instead Inheritance because a only can inherit from one class, Conversely classes can implement so many Interfaces as they want.
  static check(obj1: Asset, obj2: Asset) {}
}

let hero: Asset = new Hero(0, 0, 60, 60);
