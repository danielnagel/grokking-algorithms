import { assertEquals } from "@std/assert";
import { sum } from "./ch4.ts";

Deno.test(function sumTest() {
  assertEquals(sum([2, 3]), 5);
  assertEquals(sum([2, 3, 6, 7, 8]), 26);
  assertEquals(sum([12, 45, 12, 76, 23, 43, 23]), 234);
  assertEquals(sum([1]), 1);
  assertEquals(sum([]), 0);
});
