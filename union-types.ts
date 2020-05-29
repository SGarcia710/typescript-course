// If we want a variable that can save different types of data we achive this with advanced types. Like Union.

let age: number | string; // This variable can save number and strings
age = 12;
age = '12';

// This make us have to use Type guards because we are avoiding the typed security that TypeScript gives to us.
