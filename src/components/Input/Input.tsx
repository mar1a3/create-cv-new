import React from 'react';
import { Input } from 'antd';
import { Wrapper } from './style';

interface FormFieldProps {
    label: string;
    placeholder: string;
}

export const FormField: React.FC<FormFieldProps> = ({ label, placeholder }) => {
    return (
        <>
            <Wrapper>
                <Input placeholder={placeholder} size="large" />
            </Wrapper>
        </>
    )
}


