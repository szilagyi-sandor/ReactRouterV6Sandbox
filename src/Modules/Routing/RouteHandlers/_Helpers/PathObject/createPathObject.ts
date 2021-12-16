import { PathItem } from "../../_Interfaces/PathItem";

export const createPathObject = <T extends Record<string, PathItem>>(
  pathObject: T
): T => pathObject;
