import { configureStore } from "@reduxjs/toolkit";
import personalInfoReducer from './slices/personalInfoSlice';

export const store = configureStore({
    reducer: {
        personalInf: personalInfoReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
