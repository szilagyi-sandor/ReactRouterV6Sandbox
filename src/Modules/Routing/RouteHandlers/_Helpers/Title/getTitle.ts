import { PathItem } from "../../_Interfaces/PathItem";
import { getNestedItem } from "../Generic/getNestedItem";
import { combineItemsWithPriors } from "../Generic/combineItemsWithPriors";

export const getTitle = (
  pathObject: Record<string, PathItem>,
  pathItem: PathItem
): string => {
  const titles: string[] = [];

  const { _processedInfo } = pathItem;

  if (_processedInfo && _processedInfo.parentKeys) {
    const parentKeysArr = combineItemsWithPriors(_processedInfo.parentKeys);

    parentKeysArr.forEach((keys) => {
      const parentItem = getNestedItem(pathObject, keys);

      if (parentItem && parentItem.title) {
        titles.push(parentItem.title);
      }
    });
  }

  if (pathItem.title) {
    titles.push(pathItem.title);
  }

  return titles.join("");
};
