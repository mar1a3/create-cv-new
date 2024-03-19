import React from 'react';
import { Input as AntdInput, InputProps } from 'antd';
import { Wrapper } from './style';


export const Input: React.FC<InputProps> = ({placeholder }) => {
    return (
        <>
            <Wrapper>
                <AntdInput placeholder={placeholder} size="large" />
            </Wrapper>
        </>
    )
}


