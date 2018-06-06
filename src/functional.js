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

export { forEach, forEachObject, map };
