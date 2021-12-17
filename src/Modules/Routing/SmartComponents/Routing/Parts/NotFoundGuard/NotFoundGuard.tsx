import React, { PropsWithChildren } from "react";

import { NotFoundGuardProps } from "./interfaces";
import NotFoundPage from "../../../../../../Views/_Common/Pages/NotFound/NotFoundPage";

export default function NotFoundGuard({
  children,
  condition,
}: PropsWithChildren<NotFoundGuardProps>) {
  if (!condition) {
    return <NotFoundPage />;
  }

  return <>{children}</>;
}
