import React from 'react';
import { InfoCard } from '../InfoCard/InfoCard';
import { Select } from '../Select/Select';
import { TagsWrapper, StyledTag } from './style';
import { SkillsOptions } from './consts';


export const Skills = () => {
    const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

    const handleChangeSkills = (value: any) => {
        setSelectedTags(value);
    };

    const handleTagClose = (removedTag: string) => {
        const newTags = selectedTags.filter((tag) => tag !== removedTag);
        setSelectedTags(newTags);
    };
    console.log(selectedTags)
    return (
        <InfoCard title="Навыки">
            <Select
                mode="multiple"
                title="Навыки"
                placeholder="Выберите навыки"
                options={SkillsOptions}
                onChange={handleChangeSkills}
                value={selectedTags}
            />
            <TagsWrapper>
                {selectedTags.map((tag) => (
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