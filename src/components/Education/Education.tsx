import React from 'react';
import { InfoCard } from '../InfoCard/InfoCard';
import { FormControl } from '../FormControl/FormControl';
import { Input } from '../Input/Input';
import { CalendarWidget } from '../CalendarWidget/CalendarWidget';
import { Select } from '../Select/Select'

export const Education = () => {
    return (
        <InfoCard title="Образование">
            <FormControl label="Учреждение">
                <Input placeholder="Фио" />
            </FormControl>
            <CalendarWidget title="Дата окончания" placeholder="Дата окончания" />
            <Select
                title="Степень"
                options={[
                    { value: 'Бакалавр', label: 'Бакалавр' },
                    { value: 'Магистр', label: 'Магистр' }
                ]}
            />
        </InfoCard>
    )
}