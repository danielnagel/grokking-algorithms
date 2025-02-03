export const sum = (arr: number[]): number => !arr.length ? 0 : arr[0] + sum(arr.slice(1));
export const length = (arr: number[]): number => !arr.length ? 0 : 1 + length(arr.slice(1));
export const max = (arr: number[]): number => {
    if(!arr.length) return 0;
    const m = max(arr.slice(1));
    return arr[0] > m ? arr[0] : m;
}
