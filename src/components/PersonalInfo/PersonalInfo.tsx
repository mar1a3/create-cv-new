import React from 'react';
import { MainCard } from '../Card/Card';
import { UserInput } from '../Input/Input';
import { UserCalendar } from '../Calendar/Calendar';
import { UserUpload } from '../Upload/Upload';


export const PersonalInfo = () => {
    return (
        <MainCard title="Персональная инфомация">
            <UserInput label="Фио" placeholder="Фио" />
            <UserInput label="Место жительства" placeholder="Место жительства" />
            <UserInput label="Номер телефона" placeholder="Номер телефона" />
            <UserCalendar title="Дата рождения" placeholder="Дата рождения" />
            <UserUpload />
        </MainCard>
    )
}