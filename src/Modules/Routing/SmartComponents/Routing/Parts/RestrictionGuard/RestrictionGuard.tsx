import React, { PropsWithChildren } from "react";

import { RestrictionGuardProps } from "./interfaces";
import RestrictedPage from "../../../../../../Views/_Common/Pages/Restricted/RestrictedPage";

export default function RestrictionGuard({
  children,
  condition,
}: PropsWithChildren<RestrictionGuardProps>) {
  if (!condition) {
    return <RestrictedPage />;
  }

  return <>{children}</>;
}
