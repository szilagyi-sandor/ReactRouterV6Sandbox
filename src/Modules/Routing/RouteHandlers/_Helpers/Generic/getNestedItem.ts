import { NestableItem } from "../../_Interfaces/NestableItem";

// This function gives back the item by reference.
export const getNestedItem = <T extends NestableItem<T>>(
  object: Record<string, T>,
  keys: string[]
): T | undefined => {
  if (keys.length === 0) {
    return undefined;
  }

  let output: T | undefined = object[keys[0]];

  // We are skipping the first iteration, since we done it above.
  for (let i = 1; i < keys.length; i++) {
    const key = keys[i];

    if (output && output.children) {
      output = output.children[key];
    } else {
      // Either the output is undefined,
      // so the keys given are not valid, or the output has no children left,
      // but we still have key/keys to try. In both cases this returns undefined.
      return undefined;
    }
  }

  return output;
};
