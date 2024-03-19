import React from 'react';
import { InfoCard } from '../InfoCard/InfoCard';
import { FormControl } from '../FormControl/FormControl';
import { Input } from '../Input/Input';
import { CalendarWidget } from '../CalendarWidget/CalendarWidget';
import { FileUploader } from '../FileUploader/FileUploader';

export const PersonalInfo = () => {
    return (
        <InfoCard title="Персональная инфомация">
            <FormControl label="Фио" >
                <Input placeholder="Фио" />
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