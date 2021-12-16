import { pathObject } from "./pathObject";
import { createPaths } from "../RouteHandlers/_Helpers/Path/createPaths";
import {
  homePagePathItem,
  loginPagePathItem,
  page1PagePathItem,
  page2PagePathItem,
  siteLayoutPathItem,
  signInPagePathItem,
  signUpPagePathItem,
  page2Page2PathItem,
  adminLayoutPathItem,
  registerPagePathItem,
  adminHomePagePathItem,
  administratorHomePagePathItem,
} from "./pathObjectParts";

export const paths = createPaths(pathObject, {
  homePage: homePagePathItem,
  loginPage: loginPagePathItem,
  page1Page: page1PagePathItem,
  page2Page: page2PagePathItem,
  siteLayout: siteLayoutPathItem,
  signInPage: signInPagePathItem,
  signUpPage: signUpPagePathItem,
  page2Page2: page2Page2PathItem,
  adminLayout: adminLayoutPathItem,
  registerPage: registerPagePathItem,
  adminHomePage: adminHomePagePathItem,
  administratorHomePage: administratorHomePagePathItem,
});
