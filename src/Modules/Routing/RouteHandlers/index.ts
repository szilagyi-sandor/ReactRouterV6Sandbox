import { PathItem } from "./_Interfaces/PathItem";
import { getPath } from "./_Helpers/Path/getPath";
import { getTitle } from "./_Helpers/Title/getTitle";
import { NestableItem } from "./_Interfaces/NestableItem";
import { createPaths } from "./_Helpers/Path/createPaths";
import { useDocTitle } from "./Hooks/useDocTitle/useDocTitle";
import { getPathDetails } from "./_Helpers/Path/getPathDetails";
import { getNestedItem } from "./_Helpers/Generic/getNestedItem";
import { getCombinations } from "./_Helpers/Generic/combinations";
import { getRelativePath } from "./_Helpers/Path/getRelativePath";
import { createPathObject } from "./_Helpers/PathObject/createPathObject";
import { processPathObject } from "./_Helpers/PathObject/processPathObject";
import { deepMapNestedObject } from "./_Helpers/Generic/deepMapNestedObject";
import { combineItemsWithPriors } from "./_Helpers/Generic/combineItemsWithPriors";

export type { NestableItem, PathItem };

export {
  getNestedItem,
  getCombinations,
  deepMapNestedObject,
  combineItemsWithPriors,
};

export { createPathObject, processPathObject };

export { getPathDetails, createPaths, getPath, getRelativePath };

export { getTitle };

export { useDocTitle };
