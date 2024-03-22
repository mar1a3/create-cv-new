import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { InfoCard } from '../InfoCard/InfoCard';
import { Select } from '../Select/Select';

import { TagsWrapper, StyledTag } from './style';
import { SkillsOptions } from './consts';


import { addSkills, removeSkills } from '../../slices/skillsSlice';
import { RootState } from '../../store';


export const Skills = () => {
    const dispatch = useDispatch();
    const selectedSkills = useSelector((state: RootState) => state.skills.skills);
    const handleChangeSkills = (value: any) => {
        dispatch(addSkills(value));
    }
    const handleTagClose = (removedTag: string) => {
        dispatch(removeSkills(removedTag));
    }

    return (
        <InfoCard title="Навыки">
            <Select
                mode="multiple"
                title="Навыки"
                placeholder="Выберите навыки"
                options={SkillsOptions}
                onChange={handleChangeSkills}
                value={selectedSkills}
            />
            <TagsWrapper>
                {selectedSkills.map((tag: string) => (
                    <StyledTag
                        key={tag}
                        onClose={() => handleTagClose(tag)}
                    >
                        {tag}
                    </StyledTag>
                ))}
            </TagsWrapper>
        </InfoCard>
    )
}