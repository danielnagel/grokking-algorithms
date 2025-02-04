import { length, max, quicksort, sum } from "./ch4.ts";

if (import.meta.main) {
  const array = [3, 2, 5, 1];
  console.log(`Sum of (${array}):`, sum(array));
  console.log(`Length of (${array}):`, length(array));
  console.log(`Max of (${array}):`, max(array));
  console.log(`Sorted (${array}):`, quicksort(array));
}
