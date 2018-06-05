const forEach = (arr, fn) => {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
};

const forEachObject = (obj, fn) => {
  for (let property in obj) {
    if (obj.hasOwnProperty(property)) {
      fn(property, obj[property]);
    }
  }
};

export { forEach, forEachObject };
