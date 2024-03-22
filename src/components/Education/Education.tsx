import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs, { Dayjs } from 'dayjs';

import { InfoCard } from '../InfoCard/InfoCard';
import { FormControl } from '../FormControl/FormControl';
import { Input } from '../Input/Input';
import { CalendarWidget } from '../CalendarWidget/CalendarWidget';
import { Select } from '../Select/Select'
import { DatePicker } from 'antd';

import { setInstitution, setGraduate, setDegree } from '../../slices/educationSlice';
import { RootState } from '../../store';


export const Education = () => {
    const dispatch = useDispatch();
    const education = useSelector((state: RootState) => state.education);

    const handleInstituteChange = (e: ChangeEvent<HTMLInputElement>) => {
        const institute = e.target.value;
        dispatch(setInstitution(institute))

    }
    const handleChangeGraduate = (date: string) => {
        const formattedDate = dayjs(date);
        dispatch(setGraduate(formattedDate));
    }
    const handleChangeDegree = (value: string) => {
        dispatch(setDegree(value));
    }

    return (
        <InfoCard title="Образование">
            <FormControl label="Учреждение">
                <Input
                    placeholder="Фио"
                    value={education.institution}
                    onChange={handleInstituteChange}
                />
            </FormControl>
            <FormControl label="Дата рождения">
                <DatePicker
                    onChange={handleChangeGraduate}
                    placeholder='Дата рождения'
                />
            </FormControl>
            <Select
                defaultValue="Бакалавр"
                title="Степень"
                options={[
                    { value: 'Бакалавр', label: 'Бакалавр' },
                    { value: 'Магистр', label: 'Магистр' }
                ]}
                onChange={handleChangeDegree}
                value={education}
            />
        </InfoCard>
    )
}