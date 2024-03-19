import React from 'react';
import { InfoCard } from '../InfoCard/InfoCard';
import { FormControl } from '../FormControl/FormControl';
import { InputField } from '../InputField/InputField';
import { CalendarWidget } from '../CalendarWidget/CalendarWidget';
import { FileUploader } from '../FileUploader/FileUploader';

export const PersonalInfo = () => {
    return (
        <InfoCard title="Персональная инфомация">
            <FormControl label="Фио" >
                <InputField placeholder="Фио" />
            </FormControl>
            <FormControl label="Место жительства">
                <InputField placeholder="Место жительства" />
            </FormControl>
            <FormControl label="Номер телефона">
                <InputField placeholder="Фио" />
            </FormControl>
            <CalendarWidget title="Дата рождения" placeholder="Дата рождения" />
            <FileUploader />
        </InfoCard>
    )
}