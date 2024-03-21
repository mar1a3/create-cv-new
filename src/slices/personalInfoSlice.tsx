import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dayjs } from 'dayjs';

interface PersonalInfoState {
    fullname: string;
    location: string;
    phone: string;
    birthday: Dayjs | null;
    photo: string;

}
const initialState: PersonalInfoState = {
    fullname: '',
    location: '',
    phone:'',
    birthday: null,
    photo: ''


}

export const personalInfoSlice = createSlice({
    name: 'personalInfo',
    initialState,
    reducers: {
        setPersInfo: (state, action: PayloadAction<string>) => {
            state.fullname = action.payload;
            console.log(action)
        },
        setLocation: (state, action: PayloadAction<string>) => {
            state.location = action.payload;
            console.log(action)
        },
        setPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload;
            console.log(action)
        },
        setBirthday: (state, action: PayloadAction<Dayjs>) => {
            state.birthday = action.payload;
            console.log(action)
        },
        setPhoto: (state, action: PayloadAction<string>) => {
            state.photo = action.payload;
            console.log(action)
        }
        

    }
})

export const { setPersInfo, setLocation, setPhone, setBirthday, setPhoto } = personalInfoSlice.actions;
export default personalInfoSlice.reducer;