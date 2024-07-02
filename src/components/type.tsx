import React, { ReactNode } from "react";

export type TProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export type TCount = {
  count: number;
};

export type TTodoProviderProps = {
  children: ReactNode;
};
