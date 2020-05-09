// Encapsulation is one of the fundamental concepts in object-oriented programming (OOP). It describes the idea of bundling data and methods that work on that data within one unit, e.g., a class in Java. This concept is also often used to hide the internal representation, or state, of an object from the outside.

// An attribute can be protected or private. They cannot be public.

// Private attributes: Cannot be used outside its class. Also its not available in classes extending from its class.
// Protected attributes: Cannot be used outside its class. But it can be used in subclasses.

class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Programmer extends Person {
  private favoriteLanguage: string;
  private seniority: string;

  constructor(name: string, favoriteLanguage: string, seniority: string) {
    super(name);
    this.favoriteLanguage = favoriteLanguage;
    this.seniority = seniority;
    console.log(
      `${this.name} started its career as a ${seniority} programmer.`
    );
  }
}

let sebastian = new Programmer('Sebastián', 'JavaScript', 'Junior');
