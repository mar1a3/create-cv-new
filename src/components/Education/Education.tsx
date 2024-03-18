import React from 'react';
import { MainCard } from '../Card/Card';
import { UserInput } from '../Input/Input';
import { UserCalendar } from '../Calendar/Calendar';
import { UserSelect } from '../Select/Select'

export const Education = () => {
    return (
        <MainCard title="Образование">
            <UserInput label="Учреждение" placeholder="Учреждение" />
            <UserCalendar title="Дата окончания" placeholder="Дата окончания" />
            <UserSelect
                title="Степень"
                options={[
                    { value: 'Бакалавр', label: 'Бакалавр' },
                    { value: 'Магистр', label: 'Магистр' }
                ]}
            />
        </MainCard>
    )
}