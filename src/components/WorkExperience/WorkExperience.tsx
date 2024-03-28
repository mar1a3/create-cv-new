import React from 'react';

import { DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { Input as AntInput } from 'antd';
import { DatePicker, Space } from 'antd';

import { InfoCard } from '../InfoCard/InfoCard';
import { Input } from '../Input/Input';
import { FormControl } from '../FormControl/FormControl';
import { DateRangePicker } from '../DateRangePicker/DatePicker';
import { FlexibleTextArea } from '../FlexibleTextArea/FlexibleTextArea';
import { Button } from '../Button/Button';
import { ParagraphWrapper } from './style';

import { addExperience, removeExperience, updateExperience } from '../../slices/workExperienceSlice';
import { RootState } from '../../store';

const { TextArea } = AntInput;
const { RangePicker } = DatePicker;

export const WorkExperience = () => {
    const dispatch = useDispatch();
    const experience = useSelector((state: RootState) => state.experience.experiences)

    const handleAddExperience = () => {
        dispatch(addExperience());
    };
    const handleRemoveExperience = (id: number) => {
        dispatch(removeExperience(id));
    };
    const handleInputChange = (id: number, field: string, value: string | null| [Dayjs | null, Dayjs | null]) => {
        const currentBlock = experience.find(block => block.id === id);
        if (currentBlock) {
            const updatedBlock = { ...currentBlock, [field]: value };
            dispatch(updateExperience({ currentBlock: updatedBlock, index: experience.indexOf(currentBlock) }));
        }
    };

    // const handleDateChange = (id: number, term: null | [Dayjs | null, Dayjs | null]) => {
    //     if (!term) return '';
    //     const currentBlock = experience[id];
    //     const formattedTerm = term.map(date => date ? dayjs(date).format('YYYY-MM-DD') : null);
    //     // const newDate = `${dayjs(term[0]).format('YYYY.MM.DD')} - ${dayjs(term[1]).format('YYYY.MM.DD')}`
    //     const updatedBlock = { ...currentBlock, period:formattedTerm };
    //     dispatch(updateExperience({ currentBlock: updatedBlock, index: experience.indexOf(currentBlock) }));
    //     console.log(updatedBlock)
    // };

    return (
        <InfoCard title="Опыт работы">
            {experience.map((block: any, index: number) => (
                <React.Fragment key={block.id}>
                    <ParagraphWrapper>
                        <p>Место работы - {index + 1}</p>
                        {index > 0 && <DeleteOutlined className="delete-icon" onClick={() => handleRemoveExperience(block.id)} />}
                    </ParagraphWrapper>
                    <FormControl label="Компания" >
                        <Input
                            placeholder="Компания"
                            value={block.company}
                            onChange={(e) => handleInputChange(block.id, 'company', e.target.value)}
                        />
                    </FormControl>
                    <FormControl label="Должность" >
                        <Input
                            placeholder="Должность"
                            value={block.position}
                            onChange={(e) => handleInputChange(block.id, 'position', e.target.value)}
                        />
                    </FormControl>
                    <FormControl label="Период работы" >
                        <RangePicker
                            format="YYYY-MM-DD"
                            onChange=
                            {(dates: null | [Dayjs | null, Dayjs | null]) => handleInputChange(block.id,'term', dates)}
                        />

                    </FormControl>
                    <FormControl label="Описание" >
                        <TextArea
                            value={block.description}
                            onChange={(e: any) => handleInputChange(block.id, 'description', e.target.value)} />
                    </FormControl>
                    <FormControl label="" >
                        <Button onClick={handleAddExperience} />
                    </FormControl>
                </React.Fragment>
            ))}
        </InfoCard>
    )
}


// const [workBlocks, setWorkBlocks] = React.useState([{ id: 1 }]);

// const handleAddExperienceBlock = () => {
//     const newId = Math.random();
//     setWorkBlocks([...workBlocks, { id: newId }])
// };
// const handleRemoveExperienceBlock = (id: number) => {
//     const updatedBlocks = workBlocks.filter((block) => block.id !== id);
//     setWorkBlocks(updatedBlocks);
// };

// return (
//     <InfoCard title="Опыт работы">
//         {workBlocks.map((block, index) => (
//             <React.Fragment key={block.id}>
//                 <ParagraphWrapper>
//                     <p>Место работы - {index + 1}</p>
//                     {index > 0 && <DeleteOutlined className="delete-icon" onClick={handleRemoveExperienceBlock} />}
//                 </ParagraphWrapper>
//                 <FormControl label="Компания" >
//                     <Input placeholder="Компания" />
//                 </FormControl>
//                 <FormControl label="Должность" >
//                     <Input placeholder="Должность" />
//                 </FormControl>
//                 <FormControl label="Период работы" >
//                     <DateRangePicker />
//                 </FormControl>
//                 <FormControl label="Описание" >
//                     <FlexibleTextArea />
//                 </FormControl>
//                 <FormControl label="" >
//                     <Button onClick={handleAddExperience} />
//                 </FormControl>
//             </React.Fragment>
//         ))}
//     </InfoCard>
// )