import { describe, it, expect } from 'vitest';

import { bubbleSort } from './sorting-algorithm';

describe('sorting algorithm', () => {
  it('sort using bubble sort algorithm', () => {
    const elements = [3, 6, 1, 2, 9, 7, 4, 5, 8, 10];

    expect(bubbleSort(elements)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
