import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import {styled, createGlobalStyle} from 'styled-components';

export const CardFont = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap');
`

interface CustomCalendarProps {
    title?: string;
    placeholder?:string;
}

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};
const CustomCalendarWrapper = styled.div`
    font-family: "FiraMono", sans-serif;
    color:#424242;
    margin-bottom:30px;
    & p{
        font-size:20px;
    }
`
export const CustomCalendar: React.FC<CustomCalendarProps> = ({title, placeholder}) => (
    <>
    <CardFont />
    <CustomCalendarWrapper>
        <p>{title}</p>
            <DatePicker
                style={{background:'transparent'}}
                onChange={onChange}
                placeholder={title}
            />
    </CustomCalendarWrapper>
    </>
);

