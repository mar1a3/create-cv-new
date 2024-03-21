import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InfoCard } from '../InfoCard/InfoCard';
import { FormControl } from '../FormControl/FormControl';
import { Input } from '../Input/Input';
import { CalendarWidget } from '../CalendarWidget/CalendarWidget';
import { FileUploader } from '../FileUploader/FileUploader';
import { setPersInfo } from '../../slices/personalInfoSlice';
import { RootState } from '../../store';

export const PersonalInfo = () => {
    const dispatch = useDispatch();
    const personalInfo = useSelector((state: RootState) => state.personalInf)

    const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fullname = e.target.value;
        dispatch(setPersInfo(fullname))
        console.log(dispatch(setPersInfo(fullname)))
    }

    return (
        <InfoCard title="Персональная инфомация">
            <FormControl label="Фио" >
                <Input
                    value={personalInfo.fullname}
                    placeholder="Фио"
                    onChange={handleFullNameChange}
                />
            </FormControl>
            <FormControl label="Место жительства">
                <Input placeholder="Место жительства" />
            </FormControl>
            <FormControl label="Номер телефона">
                <Input placeholder="Фио" />
            </FormControl>
            <CalendarWidget title="Дата рождения" placeholder="Дата рождения" />
            <FileUploader />
        </InfoCard>
    )
}