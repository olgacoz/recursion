import fibs from "./fibs.js";

describe("iterative fibs function", () => {
  test("fibs(8) is [0, 1, 1, 2, 3, 5, 8, 13]", () => {
    expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test("fibs(1) is [0]", () => {
    expect(fibs(1)).toEqual([0]);
  });

  test("fibs(2) is [0, 1]", () => {
    expect(fibs(2)).toEqual([0, 1]);
  });

  test("fibs(15) is [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]", () => {
    expect(fibs(15)).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377,
    ]);
  });

  test("fibs(0) is undefined", () => {
    expect(fibs(0)).toBeUndefined();
  });

  test("fibs(-1) is undefined", () => {
    expect(fibs(-1)).toBeUndefined();
  });
});
