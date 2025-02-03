export const sum = (arr: number[]): number => !arr.length ? 0 : arr[0] + sum(arr.slice(1));
export const length = (arr: number[]): number => !arr.length ? 0 : 1 + length(arr.slice(1));
