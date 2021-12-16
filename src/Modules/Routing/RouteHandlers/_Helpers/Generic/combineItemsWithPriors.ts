// From
// ["foo", "bar", "baz"] this creates
// [["foo"], ["foo", "bar"], ["foo", "bar", "baz"]]
export const combineItemsWithPriors = (keys: string[]): string[][] =>
  keys.map((_, i) => keys.slice(0, i + 1));
