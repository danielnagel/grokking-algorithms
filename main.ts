import { sum } from "./ch4.ts";

if (import.meta.main) {
  const array = [3, 2, 5, 1];
  console.log(`Sum (${array}):`, sum(array));
}
