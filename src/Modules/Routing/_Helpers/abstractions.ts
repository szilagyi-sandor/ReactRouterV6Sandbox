import { pathObject } from "../_Constants/pathObject";
import { getPathDetails, getTitle, PathItem } from "../RouteHandlers";

export const _getTitle = (pathItem: PathItem) => getTitle(pathObject, pathItem);

export const _getPathDetails = (pathItem: PathItem) =>
  getPathDetails(pathObject, pathItem);
