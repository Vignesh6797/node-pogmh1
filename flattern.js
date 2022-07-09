const arr = [5, 6, [2, 3, [5, 4], [6, 7, [8, [9]]]]];

function flatern(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 0) {
      result = [...result, ...flatern(arr[i])];
    } else {
      result = [...result, arr[i]];
    }
  }

  return result;
}

console.log(flatern(arr));
