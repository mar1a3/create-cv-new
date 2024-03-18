import React from 'react';
import { Input } from 'antd';
import { styled } from 'styled-components';


interface CustomInputProps {
    label: string;
    placeholder: string;
    customStyles?: CustomStyles;
}
interface CustomStyles {
    color?: string;
}

const StylesCustomInput = styled.div<Omit<CustomInputProps, 'label' | 'placeholder'>>`
    height: 90px;
    & p{
        margin-top: -10px;
        font-size: 30px;
        width:400px;
    }
    & input{
        background-color:transparent;
    }
    & input::placeholder{
        color:white;
    ${props => props.customStyles && `
            color:${props.customStyles.color}
    `}
}
`
export const CustomInput: React.FC<CustomInputProps> = ({ label, placeholder, customStyles }) => {
    return (
        <StylesCustomInput customStyles={customStyles}>
            <p> {label}
                <Input placeholder={placeholder} size="large" />
            </p>
        </StylesCustomInput>

    )
}


