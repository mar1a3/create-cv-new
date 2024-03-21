import React from 'react';
import { InfoCard } from '../InfoCard/InfoCard';
import { FormControl } from '../FormControl/FormControl';
import { Input } from '../Input/Input';
import { DatePicker } from 'antd';
import { CalendarWidget } from '../CalendarWidget/CalendarWidget';
import { Select } from '../Select/Select'

export const Education = () => {
    return (
        <InfoCard title="Образование">
            <FormControl label="Учреждение">
                <Input placeholder="Фио" />
            </FormControl>
            <FormControl label="Дата окончания">
            <DatePicker
                placeholder={"Дата окончания"}
            />
            </FormControl>
            {/* <CalendarWidget title="Дата окончания" placeholder="Дата окончания" /> */}
            <Select
                defaultValue="Бакалавр"
                title="Степень"
                options={[
                    { value: 'Бакалавр', label: 'Бакалавр' },
                    { value: 'Магистр', label: 'Магистр' }
                ]}
            />
        </InfoCard>
    )
}