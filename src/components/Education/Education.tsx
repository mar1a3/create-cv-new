import React from 'react';
import { InfoCard } from '../Card/Card';
import { FormControl } from '../FormControl/FormControl';
import { FormField } from '../Input/Input';
import { CalendarWidget } from '../Calendar/Calendar';
import { DataSelect } from '../Select/Select'

export const Education = () => {
    return (
        <InfoCard title="Образование">
            <FormControl label="Учреждение">
                <FormField label="Фио" placeholder="Фио" />
            </FormControl>
            <CalendarWidget title="Дата окончания" placeholder="Дата окончания" />
            <DataSelect
                title="Степень"
                options={[
                    { value: 'Бакалавр', label: 'Бакалавр' },
                    { value: 'Магистр', label: 'Магистр' }
                ]}
            />
        </InfoCard>
    )
}