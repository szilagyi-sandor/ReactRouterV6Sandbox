export const getRelativePath = (
  pathDetails: Array<string | undefined>
): string => {
  if (pathDetails.length === 0) {
    return "";
  }

  return pathDetails[pathDetails.length - 1] || "";
};
