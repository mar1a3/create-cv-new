import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SkillsState {
    skills: string[];
};

const initialState: SkillsState = {
    skills: [],
}

export const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        addSkills: (state, action: PayloadAction<string[]>) => {
            state.skills = action.payload;
            console.log(action);
        },
        removeSkills: (state, action: PayloadAction<string>) => {
            state.skills = state.skills.filter((tag) => tag !== action.payload)
        }
    }
});

export const { addSkills, removeSkills } = skillsSlice.actions;
export default skillsSlice.reducer;