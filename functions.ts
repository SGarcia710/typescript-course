function add(v1: number, v2: number): number {
  return v1 + v2;
}

let total = add(2, 3);

// Optional parameters: They always have to be at the end of the args
function optional(param?: string): string {
  return param ? param : 'No enviaste parametro';
}

console.log(optional('Hey'));
console.log(optional());

// Default param value
function defaultParam(param = 'initial'): void {
  // Void means you can only return undefined or null
  console.log(param);
}

defaultParam('Hey');
defaultParam();

// Return Type : Never -> When the functions never ends, like exception or infinite bucle
function throwError(): never {
  throw new Error();
}
