import React from 'react';
import { DatePicker as AntdDatePicker } from 'antd';
import { RangePickerWrapper } from './style';

const { RangePicker } = AntdDatePicker;

export const DateRangePicker: React.FC = () => (
        <RangePickerWrapper>
        <RangePicker />
        </RangePickerWrapper>
);

