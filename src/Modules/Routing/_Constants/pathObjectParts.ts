import { pathObject } from "./pathObject";

const { appLayout } = pathObject;
export const appLayoutPathItem = appLayout;

const { adminLayout, administratorLayout, siteLayout } = appLayout.children;
export const siteLayoutPathItem = siteLayout;
export const adminLayoutPathItem = adminLayout;
export const administratorLayoutPathItem = administratorLayout;

const { homePage, loginPage, signInPage, registerPage, signUpPage } =
  siteLayout.children;
export const homePagePathItem = homePage;
export const loginPagePathItem = loginPage;
export const signInPagePathItem = signInPage;
export const signUpPagePathItem = signUpPage;
export const registerPagePathItem = registerPage;

const { adminHomePage, page1Page, page2Page, page2Page2 } =
  adminLayout.children;
export const page1PagePathItem = page1Page;
export const page2PagePathItem = page2Page;
export const page2Page2PathItem = page2Page2;
export const adminHomePagePathItem = adminHomePage;

const { adminHomePage: administratorHomePage } = administratorLayout.children;
export const administratorHomePagePathItem = administratorHomePage;
