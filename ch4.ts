export const sum = (arr: number[]): number => !arr.length ? 0 : arr[0] + sum(arr.slice(1));
export const length = (arr: number[]): number => !arr.length ? 0 : 1 + length(arr.slice(1));
export const max = (arr: number[]): number => {
    if(!arr.length) return 0;
    const m = max(arr.slice(1));
    return arr[0] > m ? arr[0] : m;
}
export const quicksort = (arr: number[]): number[] => {
    if(arr.length < 2) return arr;
    const pivotIndex = 0;
    const pivot = arr[pivotIndex];
    arr.splice(pivotIndex, 1)
    const lesser = arr.filter(n => n < pivot);
    const greater = arr.filter(n => n >= pivot);
    return [...quicksort(lesser), pivot, ...quicksort(greater)];
}