import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import { CalendarWrapper } from './style';


interface CalendarWidgetProps {
    title?: string;
    placeholder?: string;
}

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

export const CalendarWidget: React.FC<CalendarWidgetProps> = ({ title, placeholder }) => (
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

