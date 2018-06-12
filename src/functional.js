// forEach
// const forEach = (arr, fn) => {
//   for (let i = 0; i < arr.length; i++) {
//     fn(arr[i]);
//   }
// };

const forEach = (arr, fn) => {
  for (const value of arr) {
    fn(value);
  }
};

// forEachObject
const forEachObject = (obj, fn) => {
  for (let property in obj) {
    if (obj.hasOwnProperty(property)) {
      fn(property, obj[property]);
    }
  }
};

// map
const map = (arr, fn) => {
  const result = [];
  for (const value of arr) {
    result.push(fn(value));
  }
  return result;
};

// filter
const filter = (arr, fn) => {
  const result = [];
  for (const value of arr) {
    fn(value) && result.push(value);
  }
  return result;
};

// reduce
const reduce = (arr, fn, initialValue = []) => {
  let accumlator;
  accumlator = initialValue;

  for (const value of arr) {
    accumlator = fn(accumlator, value);
  }

  return accumlator;
};

// once
const once = fn => {
  let done = false;

  return function() {
    return done ? undefined : ((done = true), fn.apply(this, arguments));
  };
};

export { forEach, forEachObject, map, filter, reduce, once };
