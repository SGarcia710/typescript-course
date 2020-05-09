// Use cases:
// * The information belongs to the Class and not to the object.
// * There is only one copy needed from that variable/attribute/method. It will never be modified.

class Requestor {
  // url: string; // This way, everytime we create a new Requestor instance, we will save in memory this URL.
  static url: string = 'https://codigofacilito.com';
  // To solve this issue, we use static attributes, they are owned by the class, not by the instances.

  // Static methods: They are accessible calling the class without instantiating it.
  static getCourses() {
    // So the we access to the attribute calling the Class, not the instance(this)
    console.log(`${Requestor.url}/cursos`);
  }
  static getArticles() {
    console.log(`${Requestor.url}/articles`);
  }
}

Requestor.getArticles();
