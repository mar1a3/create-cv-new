import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PersonalInfoState {
    fullname: string;
}
const initialState: PersonalInfoState = {
    fullname: '',
}

export const personalInfoSlice = createSlice({
    name: 'personalInfo',
    initialState,
    reducers: {
        setPersInfo: (state, action: PayloadAction<string>) => {
            state.fullname = action.payload;
            console.log(action)
        }
    }
})

export const { setPersInfo } = personalInfoSlice.actions;
export default personalInfoSlice.reducer;