import { assertEquals } from "@std/assert";
import { length, sum, max } from "./ch4.ts";

Deno.test(function sumTest() {
  assertEquals(sum([2, 3]), 5);
  assertEquals(sum([2, 3, 6, 7, 8]), 26);
  assertEquals(sum([12, 45, 12, 76, 23, 43, 23]), 234);
  assertEquals(sum([1]), 1);
  assertEquals(sum([]), 0);
});

Deno.test(function lengthTest() {
  assertEquals(length([2, 3]), 2);
  assertEquals(length([2, 3, 6, 7, 8]), 5);
  assertEquals(length([12, 45, 12, 76, 23, 43, 23]), 7);
  assertEquals(length([1]), 1);
  assertEquals(length([]), 0);
});

Deno.test(function maxTest() {
  assertEquals(max([2, 3]), 3);
  assertEquals(max([2, 3, 6, 7, 8]), 8);
  assertEquals(max([12, 45, 12, 76, 23, 43, 23]), 76);
  assertEquals(max([1]), 1);
  assertEquals(max([]), 0);
});
