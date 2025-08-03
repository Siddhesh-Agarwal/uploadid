"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import { type DataStore, createDataStore, initDataStore } from "./store";

export type DataStoreApi = ReturnType<typeof createDataStore>;

export const DataStoreContext = createContext<DataStoreApi | undefined>(
  undefined
);

export interface DataStoreProviderProps {
  children: ReactNode;
}

export const DataStoreProvider = ({
  children,
}: DataStoreProviderProps) => {
  const storeRef = useRef<DataStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createDataStore(initDataStore());
  }

  return (
    <DataStoreContext.Provider value={storeRef.current}>
      {children}
    </DataStoreContext.Provider>
  );
};

export const useDataStore = <T,>(selector: (store: DataStore) => T): T => {
  const dataStoreContext = useContext(DataStoreContext);

  if (!dataStoreContext) {
    throw new Error(`useDataStore must be used within DataStoreProvider`);
  }

  return useStore(dataStoreContext, selector);
};
