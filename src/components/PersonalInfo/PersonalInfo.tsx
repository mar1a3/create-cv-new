import React from 'react';
import { InfoCard } from '../Card/Card';
import { FormControl } from '../FormControl/FormControl';
import { FormField } from '../Input/Input';
import { CalendarWidget } from '../Calendar/Calendar';
import { FileUploader } from '../Upload/Upload';


export const PersonalInfo = () => {
    return (
        <InfoCard title="Персональная инфомация">
            <FormControl label="Фио" >
                <FormField label="Фио" placeholder="Фио" />
            </FormControl>
            <FormControl label="Место жительства">
                <FormField label="Место жительства" placeholder="Место жительства" />
            </FormControl>
            <FormControl label="Номер телефона">
                <FormField label="Фио" placeholder="Фио" />
            </FormControl>
            <CalendarWidget title="Дата рождения" placeholder="Дата рождения" />
            <FileUploader />
        </InfoCard>
    )
}