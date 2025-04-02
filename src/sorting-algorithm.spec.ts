import { describe, it, expect } from "vitest";

import { bubbleSort, quickSort } from "./sorting-algorithm";

const getArrays = (length = 30): [Array<number>, Array<number>] => {
  const array = new Array(length)
    .fill(0)
    .map(() => Math.floor(Math.random() * 100));

  return [array, array.sort()];
};

describe("sorting algorithm", () => {
  it("sort using bubble sort algorithm", () => {
    const [elements, expected] = getArrays();
    expect(bubbleSort(elements)).toEqual(expected);
  });

  it("sort using quicksort algorithm", () => {
    const [elements, expected] = getArrays();
    expect(quickSort(elements, 0, elements.length - 1)).toEqual(expected);
  });
});
