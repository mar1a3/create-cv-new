import React from 'react';
import { Input } from 'antd';
import { Wrapper } from './style';

interface InputProps {
    label: string;
    placeholder: string;
}

export const UserInput: React.FC<InputProps> = ({ label, placeholder }) => {
    return (
        <>
            <Wrapper>
                <p> {label}
                    <Input placeholder={placeholder} size="large" />
                </p>
            </Wrapper>
        </>
    )
}


