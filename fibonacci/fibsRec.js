export default function fibsRec(n) {
  if (n < 1) {
    return undefined;
  }

  if (n === 1) {
    return [0];
  }

  if (n === 2) {
    return [0, 1];
  }

  const prevSequence = fibsRec(n - 1);
  prevSequence.push(
    prevSequence[prevSequence.length - 1] +
      prevSequence[prevSequence.length - 2],
  );
  return prevSequence;
}
