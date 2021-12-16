export const getPath = (pathDetails: Array<string | undefined>): string => {
  if (pathDetails.length === 0) {
    return "";
  }

  return pathDetails.filter((p) => p !== undefined).join("");
};
