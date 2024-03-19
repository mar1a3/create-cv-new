import React from 'react';
import { Button as AntdButton, ButtonProps } from 'antd';



export const Button: React.FC<ButtonProps> = ({ onClick }) => (

    <AntdButton onClick={onClick} block style={{ width: '950px' }}>Добавить еще</AntdButton>

);
