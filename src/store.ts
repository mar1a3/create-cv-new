import { configureStore } from "@reduxjs/toolkit";
import personalInfoReducer from './slices/personalInfoSlice';
import educationReducer from "./slices/educationSlice";
import skillsReducer from "./slices/skillsSlice";

export const store = configureStore({
    reducer: {
        personalInfo: personalInfoReducer,
        education: educationReducer,
        skills: skillsReducer,

    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
