"use client";
import { FC, ReactNode } from "react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "@/components/redux/api";

interface IReduxProviderProps {
  children: ReactNode;
}

const ReduxProvider: FC<IReduxProviderProps> = ({ children }) => {
  return <ApiProvider api={api}>{children}</ApiProvider>;
};

export default ReduxProvider;
