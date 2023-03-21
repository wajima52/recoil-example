"use client";

import { RecoilRoot } from "recoil";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
    require("../lib/mocks");
  }

  return <RecoilRoot>{children}</RecoilRoot>;
};
