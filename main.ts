import { length, sum } from "./ch4.ts";

if (import.meta.main) {
  const array = [3, 2, 5, 1];
  console.log(`Sum of (${array}):`, sum(array));
  console.log(`Length of (${array}):`, length(array));
}
