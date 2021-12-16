import { createPathObject } from "../RouteHandlers/_Helpers/PathObject/createPathObject";
import { processPathObject } from "../RouteHandlers/_Helpers/PathObject/processPathObject";

const adminChildren = {
  adminHomePage: {
    path: undefined,
    title: "Home",
  },
  page1Page: {
    title: "Page1",
    path: "page-1",
  },
  page2Page: {
    title: "Page2",
    path: "page-2",
  },
  page2Page2: {
    title: "Page22",
    path: "page-22",
  },
};

const unprocessedPathObject = createPathObject({
  appLayout: {
    path: undefined,
    children: {
      siteLayout: {
        title: "Site | ",
        path: "/",
        children: {
          homePage: {
            path: undefined,
            title: "Home",
          },
          loginPage: {
            title: "Login",
            path: "login",
          },
          signInPage: {
            title: "Sign in",
            path: "sign-in",
          },
          registerPage: {
            title: "Register",
            path: "register",
          },
          signUpPage: {
            title: "Sign up",
            path: "sign-up",
          },
        },
      },

      adminLayout: {
        path: "/admin/",
        title: "Admin | ",
        children: adminChildren,
      },

      administratorLayout: {
        path: "/administrator/",
        title: "Administrator | ",
        children: adminChildren,
      },
    },
  },
});

export const pathObject = processPathObject(unprocessedPathObject);
