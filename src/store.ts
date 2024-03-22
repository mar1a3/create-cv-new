import { configureStore } from "@reduxjs/toolkit";
import personalInfoReducer from './slices/personalInfoSlice';
import educationReducer from "./slices/educationSlice";

export const store = configureStore({
    reducer: {
        personalInfo: personalInfoReducer,
        education: educationReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
