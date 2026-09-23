export default function fibs(n) {
  if (n < 1) {
    return undefined;
  }

  if (n === 1) {
    return [0];
  }

  const fibSequence = [0, 1];
  for (let i = 2; i < n; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
  }

  return fibSequence;
}
