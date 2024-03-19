import React from 'react';
import { InfoCard } from '../InfoCard/InfoCard';
import { FormControl } from '../FormControl/FormControl';
import { InputField } from '../InputField/InputField';
import { CalendarWidget } from '../CalendarWidget/CalendarWidget';
import { SelectInfo } from '../SelectInfo/SelectInfo'

export const Education = () => {
    return (
        <InfoCard title="Образование">
            <FormControl label="Учреждение">
                <InputField placeholder="Фио" />
            </FormControl>
            <CalendarWidget title="Дата окончания" placeholder="Дата окончания" />
            <SelectInfo
                title="Степень"
                options={[
                    { value: 'Бакалавр', label: 'Бакалавр' },
                    { value: 'Магистр', label: 'Магистр' }
                ]}
            />
        </InfoCard>
    )
}