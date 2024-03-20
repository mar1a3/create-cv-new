import React from 'react';
import { InfoCard } from '../InfoCard/InfoCard';
import { Input } from '../Input/Input';
import { FormControl } from '../FormControl/FormControl';
import { DateRangePicker } from '../DateRangePicker/DatePicker';
import { FlexibleTextArea } from '../FlexibleTextArea/FlexibleTextArea';
import { Button } from '../Button/CustomButton';
import { DeleteOutlined } from '@ant-design/icons';
import { ParagraphWrapper } from './style';

export const WorkExperience = () => {
    const [workBlocks, setWorkBlocks] = React.useState([{ id: 1 }]);

    const handleAddExperienceBlock = () => {
        const newId = Math.random();
        setWorkBlocks([...workBlocks, { id: newId }])
    };
    const handleRemoveExperienceBlock = (id: number) => {
        const updatedBlocks = workBlocks.filter((block) => block.id !== id);
        setWorkBlocks(updatedBlocks);
    };

    return (
        <InfoCard title="Опыт работы">
            {workBlocks.map((block, index) => (
                <React.Fragment key={block.id}>
                    <ParagraphWrapper>
                        <p>Место работы - {index + 1}</p>
                        {index > 0 && <DeleteOutlined className="delete-icon" onClick={() => handleRemoveExperienceBlock(block.id)} />}
                    </ParagraphWrapper>
                    <FormControl label="Компания" >
                        <Input placeholder="Компания" />
                    </FormControl>
                    <FormControl label="Должность" >
                        <Input placeholder="Должность" />
                    </FormControl>
                    <FormControl label="Период работы" >
                        <DateRangePicker />
                    </FormControl>
                    <FormControl label="Описание" >
                        <FlexibleTextArea />
                    </FormControl>
                    <FormControl label="" >
                        <Button onClick={handleAddExperienceBlock} />
                    </FormControl>
                </React.Fragment>
            ))}
        </InfoCard>
    )
}


