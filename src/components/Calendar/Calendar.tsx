import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import { CalendarWrapper } from './style';


interface CalendarProps {
    title?: string;
    placeholder?: string;
}

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

export const UserCalendar: React.FC<CalendarProps> = ({ title, placeholder }) => (
    <>
        <CalendarWrapper>
            <p>{title}</p>
            <DatePicker
                style={{ background: 'transparent' }}
                onChange={onChange}
                placeholder={title}
            />
        </CalendarWrapper>
    </>
);

