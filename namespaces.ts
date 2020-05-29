// Namespaces let us group identifiers (classes, interfaces, const, etc) they are also known as symbols

namespace CF {
  export class YouTube {}
  export const url: string = 'google.com';
  // We need to tell inside the namespace what we want to make available outside. We achieve this with export keyword.
  const privateConst: string = '123'; // This wont be available outside the namespace
}

// Using exported things from a namespace.
let video: CF.YouTube = new CF.YouTube();
