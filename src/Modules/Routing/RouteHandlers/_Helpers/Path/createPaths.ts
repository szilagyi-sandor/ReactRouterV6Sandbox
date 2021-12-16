import { getPathDetails } from "./getPathDetails";
import { PathItem } from "../../_Interfaces/PathItem";

export const createPaths = <T extends Record<string, PathItem>>(
  pathObject: Record<string, PathItem>,
  paths: T
): Record<keyof T, Array<string | undefined>> => {
  const output = {} as Record<keyof T, Array<string | undefined>>;

  Object.keys(paths).forEach((key: keyof T) => {
    output[key] = getPathDetails(pathObject, paths[key]);
  });

  return output;
};
