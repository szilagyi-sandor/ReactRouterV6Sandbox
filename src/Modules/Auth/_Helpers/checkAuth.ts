export const checkAuth = (
  loggedIn: boolean,
  role: string,
  requiredRole?: string
): boolean => {
  if (!loggedIn) {
    return false;
  }

  if (requiredRole && requiredRole !== role) {
    return false;
  }

  return true;
};
