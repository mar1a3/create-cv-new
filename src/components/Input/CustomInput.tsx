import React from 'react';
import { Input } from 'antd';
import { styled, createGlobalStyle } from 'styled-components';


export const CardFont = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap');
`
interface CustomInputProps {
    label: string;
    placeholder: string;
}

const StylesCustomInput = styled.div`
        color:#424242;
        margin-bottom:30px;
    & p{
        font-family: "FiraMono", sans-serif;
        font-size: 20px;
        width:400px;
    }
    & input{
        margin-top: 5px;
        background-color:transparent;
    }
    & input::placeholder{
        color:#424242;
}
`
export const CustomInput: React.FC<CustomInputProps> = ({ label, placeholder }) => {
    return (
        <>
            <CardFont />
            <StylesCustomInput>
                <p> {label}
                    <Input placeholder={placeholder} size="large" />
                </p>
            </StylesCustomInput>
        </>
    )
}


