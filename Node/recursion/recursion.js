function fibonacciIterative(n) {
  let arr = [];
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

//console.log(fibonacciIterative(8));

function fibonacciRecursive(num) {
  console.log("hey");
  let arr = [];
  if (num == 1) return 0;
  if (num == 2) return 1;
  return (arr[num] = fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2));
}

console.log(fibonacciRecursive(8));

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) result.push(left.shift());
    else result.push(right.shift());
  }
  return [...result, ...left, ...right];
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

// merge sort tests
mergeSort([]);
mergeSort([73]);
mergeSort([1, 2, 3, 4, 5]);
mergeSort([3, 2, 1, 13, 8, 5, 0, 1]);
console.log(mergeSort([105, 79, 100, 110]));

// i hate recursion
