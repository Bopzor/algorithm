import { describe, it, expect } from "vitest";

import { bubbleSort, quickSort } from "./sorting-algorithm";

const getArrays = (): Array<[Array<number>, Array<number>]> => [
  [
    [75, 26, 15, 67, 54, 31, 49],
    [15, 26, 31, 49, 54, 67, 75],
  ],
  [
    [
      31, 16, 69, 59, 49, 100, 100, 76, 47, 73, 30, 91, 91, 12, 57, 32, 25, 8,
      98, 88,
    ],
    [
      8, 12, 16, 25, 30, 31, 32, 47, 49, 57, 59, 69, 73, 76, 88, 91, 91, 98,
      100, 100,
    ],
  ],
  [
    [
      41, 6, 17, 40, 97, 72, 54, 76, 15, 88, 61, 52, 96, 71, 67, 9, 29, 68, 90,
      35, 70, 80, 52, 16, 97, 17, 21, 61, 58, 10, 0, 29, 8, 37, 61, 18, 0, 14,
      15, 99, 14, 84, 69, 70, 13, 1, 81, 23, 20, 1,
    ],
    [
      0, 0, 1, 1, 6, 8, 9, 10, 13, 14, 14, 15, 15, 16, 17, 17, 18, 20, 21, 23,
      29, 29, 35, 37, 40, 41, 52, 52, 54, 58, 61, 61, 61, 67, 68, 69, 70, 70,
      71, 72, 76, 80, 81, 84, 88, 90, 96, 97, 97, 99,
    ],
  ],
];

describe("sorting algorithm", () => {
  it.each(getArrays())(
    "sort using bubble sort algorithm",
    (elements, expected) => {
      expect(bubbleSort(elements)).toEqual(expected);
    }
  );

  it.each(getArrays())(
    "sort using quicksort algorithm",
    (elements, expected) => {
      expect(quickSort(elements, 0, elements.length - 1)).toEqual(expected);
    }
  );
});
