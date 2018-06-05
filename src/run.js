import { forEach, forEachObject } from "./functional";

const arr = [1, 2, 3, 4, 5];
const obj = { id: 1, name: "jon", age: 20 };

forEach(arr, item => console.log("forEach:", item, item * item));

forEachObject(obj, (key, value) =>
  console.log(`forEachObject: ${key} is ${value}`)
);
