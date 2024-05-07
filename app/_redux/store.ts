import { configureStore } from "@reduxjs/toolkit";
import configDataReducer from "./action";

export const store = configureStore({
    reducer: {
        data: configDataReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch