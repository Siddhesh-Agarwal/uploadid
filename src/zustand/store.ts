import { createStore } from "zustand/vanilla";

export type DataState = {
  instituteID: string;
  userID: string;
};

export type DataActions = {
  setData: (data: DataState) => void;
};

export type DataStore = DataState & DataActions;

export const initDataStore = (): DataState => {
  return {
    instituteID: "",
    userID: "",
  };
};

export const defaultDataState: DataState = {
  instituteID: "",
  userID: "",
};

export const createDataStore = (initialState: DataState = defaultDataState) =>
  createStore<DataStore>((set) => ({
    ...initialState,
    setData: (data) => set(() => ({ ...data })),
  }));
