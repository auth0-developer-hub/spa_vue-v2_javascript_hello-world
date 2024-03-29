import { getInstance } from "./auth0-plugin";

export const authenticationGuard = (to, from, next) => {
  const authService = getInstance();

  const guardAction = () => {
    if (authService.isAuthenticated) {
      return next();
    }

    authService.loginWithRedirect({ appState: { targetPath: to.fullPath } });
  };

  // If the Auth0Plugin has loaded already, check the authentication state
  if (!authService.isLoading) {
    return guardAction();
  }

  authService.$watch("isLoading", (isLoading) => {
    if (isLoading === false) {
      return guardAction();
    }
  });
};
