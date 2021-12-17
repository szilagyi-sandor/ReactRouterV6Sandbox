import React, { PropsWithChildren } from "react";

import { LoginGuardProps } from "./interfaces";
import SiteLayout from "../../../../../../Views/Site/Layout/SiteLayout";
import LoginPage from "../../../../../../Views/Site/Pages/Login/LoginPage";
import { loginPagePathItem } from "../../../../_Constants/pathObjectParts";

export default function LoginGuard({
  children,
  condition,
}: PropsWithChildren<LoginGuardProps>) {
  if (!condition) {
    return (
      <SiteLayout>
        <LoginPage pathItem={loginPagePathItem} />
      </SiteLayout>
    );
  }

  return <>{children}</>;
}
