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
