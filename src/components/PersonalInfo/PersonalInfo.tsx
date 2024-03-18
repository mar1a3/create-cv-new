import React from 'react';
import { styled } from 'styled-components';
import { CustomCard } from '../Card/CustomCard';
import { CustomInput } from '../Input/CustomInput';
import { CustomCalendar } from '../Calendar/CustomCalendar';
import { CustomUpload } from '../Upload/CustomUpload';


export const PersonalInfo = () => {
    return (
        <CustomCard title="Персональная инфомация">
        <CustomInput label="Фио" placeholder="Фио" />
        <CustomInput label="Место жительства" placeholder="Место жительства" />
        <CustomInput label="Номер телефона" placeholder="Номер телефона" />
        <CustomCalendar title="Дата рождения" placeholder="Дата рождения"/>
        <CustomUpload/>
        </CustomCard>
    )
}