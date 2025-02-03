export const sum = (arr: number[]): number => !arr.length ? 0 : arr.slice(0, 1)[0] + sum(arr.slice(1));
