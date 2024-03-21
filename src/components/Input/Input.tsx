import React from 'react';
import { Input as AntdInput, InputProps } from 'antd';
import { Wrapper } from './style';


export const Input: React.FC<InputProps> = ({placeholder,value,onChange }) => {
    return (
        <>
            <Wrapper>
                <AntdInput placeholder={placeholder} value={value} onChange={onChange}  size="large" />
            </Wrapper>
        </>
    )
}


