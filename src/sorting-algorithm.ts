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

export const quickSort = (elements: number[]) => {
  if (elements.length === 0) {
    return elements;
  }

  const pivot = elements.shift() as number;

  elements.push(pivot);
  let pivotIndex = elements.length - 1;

  for (let index = 0; index < pivotIndex; index++) {
    const current = elements[index];

    if (current >= pivot) {
      elements.splice(index, 1);
      elements.push(current);
      pivotIndex--;
      index--;
    }
  }

  if (pivotIndex !== elements.length) {
    const leftPartition = quickSort(elements.slice(0, pivotIndex));
    const rightPartition = quickSort(elements.slice(pivotIndex + 1));

    return [...leftPartition, pivot, ...rightPartition];
  }

  return elements;
};
