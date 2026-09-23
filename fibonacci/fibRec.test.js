import fibsRec from "./fibsRec.js";

describe("recursive fibRec function", () => {
  test("fibsRec(8) is [0, 1, 1, 2, 3, 5, 8, 13]", () => {
    expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test("fibsRec(1) is [0]", () => {
    expect(fibsRec(1)).toEqual([0]);
  });

  test("fibsRec(2) is [0, 1]", () => {
    expect(fibsRec(2)).toEqual([0, 1]);
  });

  test("fibsRec(15) is [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]", () => {
    expect(fibsRec(15)).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377,
    ]);
  });

  test("fibsRec(0) is undefined", () => {
    expect(fibsRec(0)).toBeUndefined();
  });

  test("fibsRec(-1) is undefined", () => {
    expect(fibsRec(-1)).toBeUndefined();
  });
});
