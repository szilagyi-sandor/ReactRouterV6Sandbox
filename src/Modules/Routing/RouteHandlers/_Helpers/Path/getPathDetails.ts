import { PathItem } from "../../_Interfaces/PathItem";
import { getNestedItem } from "../Generic/getNestedItem";
import { combineItemsWithPriors } from "../Generic/combineItemsWithPriors";

export const getPathDetails = (
  pathObject: Record<string, PathItem>,
  pathItem: PathItem
): Array<string | undefined> => {
  const output: Array<string | undefined> = [];

  const { path, _processedInfo } = pathItem;

  if (_processedInfo && _processedInfo.parentKeys) {
    const parentKeysArr = combineItemsWithPriors(_processedInfo.parentKeys);

    const parentPathItemList: PathItem[] = [];

    for (let i = 0; i < parentKeysArr.length; i++) {
      const keys = parentKeysArr[i];

      const parentPathItem = getNestedItem(pathObject, keys);

      if (parentPathItem) {
        parentPathItemList.push(parentPathItem);
      } else {
        return [path];
      }
    }

    parentPathItemList.forEach((item) => output.push(item.path));
  }

  output.push(path);

  return output;
};
