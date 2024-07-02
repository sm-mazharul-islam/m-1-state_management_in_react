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

export type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export type TAction = {
  type: string;
  payload: TTodo | string;
};
