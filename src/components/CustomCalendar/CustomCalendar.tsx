import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import styled from 'styled-components';

interface CustomCalendarProps {
    customStyles?: React.CSSProperties;
}

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};
const CustomCalendarWrapper = styled.div<CustomCalendarProps>`
    ${props => props.customStyles && `
        position:${props.customStyles.position};
        top:${props.customStyles.top};
        left:${props.customStyles.left};
    `}
`

export const CustomCalendar: React.FC<CustomCalendarProps> = ({customStyles}) => (
    <CustomCalendarWrapper customStyles={customStyles}>
        <Space>
            <DatePicker
                onChange={onChange}
                placeholder="Date of birth"
            />
        </Space>
    </CustomCalendarWrapper>
);

