export const bubbleSort = (elements: number[]) => {
  let permutationCount = 0;

  do {
    permutationCount = 0;

    for (let index = 1; index < elements.length; index++) {
      const previous = elements[index - 1];
      const current = elements[index];

      if (current < previous) {
        elements[index - 1] = current;
        elements[index] = previous;

        permutationCount++;
      }
    }
  } while (permutationCount > 0);

  return elements;
};

export const quickSort = (
  elements: number[],
  startIndex: number,
  endIndex: number
) => {
  const [pivot] = elements.splice(startIndex, 1);

  elements.splice(endIndex, 0, pivot);
  let pivotIndex = endIndex;

  for (let index = startIndex; index < pivotIndex; index++) {
    const current = elements[index];

    if (current >= pivot) {
      elements.splice(index, 1);
      elements.splice(endIndex, 0, current);
      pivotIndex--;
      index--;
    }
  }

  if (startIndex !== pivotIndex) {
    quickSort(elements, startIndex, pivotIndex - 1);
  }

  if (pivotIndex !== endIndex) {
    quickSort(elements, pivotIndex + 1, endIndex);
  }

  return elements;
};
