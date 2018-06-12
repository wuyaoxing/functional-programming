import { forEach, forEachObject, map, filter, reduce, once } from "./functional";

const arr = [1, 2, 3, 4, 5];
const obj = { id: 1, name: "jon", age: 20 };

forEach(arr, item => console.log("forEach:", item, item * item));

forEachObject(obj, (key, value) =>
  console.log(`forEachObject: ${key} is ${value}`)
);

const arrMap = map(arr, item => item * item);
console.log("map:", arr, "to", arrMap);

const arrFilter = filter(arr, item => item > 3);
console.log("filter:", arr, "to", arrFilter);

const arrReduce = reduce(arr, (acc, val) => {
  acc.push(val * val)
  return acc
}, [78])

const arrReduceToObject = reduce(arr, (acc, val) => {
  acc[val] = val * val
  return acc
}, {})

console.log('reduce:', arr, 'to', arrReduce, 'and', arrReduceToObject)

const onceEvent = val => {
  console.log('once:', val)
}

const onceFn = once(onceEvent)

onceFn(1)
onceFn(2)
onceFn(3)
