import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dayjs } from 'dayjs';

interface Experience {
    id: number,
    company: string,
    position: string,
    term: [Dayjs | null, Dayjs | null],
    description: string
}
interface ExperienceState {
    experiences: Experience[];
}
const initialState: ExperienceState = {
    experiences: [{
        id: Math.random(),
        company: '',
        position: '',
        term: [null, null],
        description: ''
    }],
};

export const experienceSlice = createSlice({
    name: 'experience',
    initialState,
    reducers: {
        addExperience: (state) => {
            const newId = Math.random();
            state.experiences.push({
                id: newId,
                company: '',
                position: '',
                term: [null, null],
                description: ''
            })
        },
        removeExperience: (state, action: PayloadAction<number>) => {
            state.experiences = state.experiences.filter((block) => block.id !== action.payload);
        },
        updateExperience: (state, action: PayloadAction<{ currentBlock: Experience, index: number }>) => {
            const { currentBlock, index } = action.payload;
            const newExperiences = [
                ...state.experiences.slice(0, index),
                currentBlock,
                ...state.experiences.slice(index + 1),
            ];
            return { ...state, experiences: newExperiences };
        },
        
        //     updateExperience: (state, action: PayloadAction<Experience>) => {
        //         const { id, company, position } = action.payload;
        //         const blockIndex = state.experiences.findIndex((block) => block.id === id);
        //         if (blockIndex !== -1) {
        //             state.experiences[blockIndex] = { id, company, position };
        //         }
        //     }
        // }
        //     updateExperience: (state, action: PayloadAction<{ id: number; company: string; position: string,
        //         term: Dayjs | null, description: string  }>) => {
        //         const { id, company, position, term, description } = action.payload;
        //         const blockToUpdate = state.experiences.find((block) => block.id === id);
        //         if (blockToUpdate) {
        //             blockToUpdate.company = company;
        //             blockToUpdate.position = position;
        //             blockToUpdate.term = term;
        //             blockToUpdate.description = description;
        //         }
        //     }
        // }
    }
})

export const { addExperience, removeExperience, updateExperience } = experienceSlice.actions;
export default experienceSlice.reducer;