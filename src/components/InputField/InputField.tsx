import React from 'react';
import { Input, InputProps } from 'antd';
import { Wrapper } from './style';


export const InputField: React.FC<InputProps> = ({placeholder }) => {
    return (
        <>
            <Wrapper>
                <Input placeholder={placeholder} size="large" />
            </Wrapper>
        </>
    )
}


