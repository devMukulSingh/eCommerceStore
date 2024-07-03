"use client";
import React, { ReactNode } from "react";
import { SWRConfig } from "swr";
import localStorageProvider from "./localStorageProvider";

const SWRProvider = ({ children }: { children: ReactNode }) => {
  return (
    //@ts-ignore
    <SWRConfig value={{ provider: localStorageProvider }}>{children}</SWRConfig>
  );
};

export default SWRProvider;
