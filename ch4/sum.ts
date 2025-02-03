export const sum = (arr: number[]): number => !arr.length ? 0 : arr[0] + sum(arr.slice(1));
