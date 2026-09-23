function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  const arr = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i++]);
    } else {
      arr.push(arr2[j++]);
    }
  }
  while (i < arr1.length) {
    arr.push(arr1[i++]);
  }
  while (j < arr2.length) {
    arr.push(arr2[j++]);
  }

  return arr;
}

export default function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const midPoint = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, midPoint);
  const rightHalf = arr.slice(midPoint);

  const sortedLeftHalf = mergeSort(leftHalf);
  const sortedRightHalf = mergeSort(rightHalf);
  return merge(sortedLeftHalf, sortedRightHalf);
}
