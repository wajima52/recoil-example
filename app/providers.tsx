"use client";

import { RecoilRoot } from "recoil";
if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../lib/mocks");
}

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
