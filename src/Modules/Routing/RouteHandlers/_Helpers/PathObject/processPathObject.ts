import { PathItem } from "../../_Interfaces/PathItem";
import { getNestedItem } from "../Generic/getNestedItem";
import { deepMapNestedObject } from "../Generic/deepMapNestedObject";

export const processPathObject = <T extends Record<string, PathItem>>(
  unprocessedPathObject: T
): T => {
  let output: T = { ...unprocessedPathObject };

  deepMapNestedObject(output, (pathItem, keys) => {
    // We are taking the previous item to
    // enable the creation of a deep copy and not modify the input.
    const previousKeys = keys.slice(0, -1);
    const lastKey = keys[keys.length - 1];

    // The previousKeys on the first level is empty,
    // and getNestedItem returns undefined in that case, which is perfect.
    const previousPathItem = getNestedItem(output, previousKeys);

    if (previousPathItem && previousPathItem.children) {
      // Setting the current item's parentsInfo.
      previousPathItem.children = {
        ...previousPathItem.children,
        [lastKey]: {
          ...pathItem,
          _processedInfo: {
            key: lastKey,
            parentKeys: previousKeys,
          },
        },
      };
    } else {
      // Handling first level items is necessary
      // to manage the object references properly.
      output = {
        ...output,
        [lastKey]: {
          ...pathItem,
          _processedInfo: {
            key: lastKey,
          },
        },
      };
    }
  });

  return output;
};
