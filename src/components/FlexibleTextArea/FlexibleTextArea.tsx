import React from 'react';
import { Input as AntdInput } from 'antd';

const { TextArea } = AntdInput;

export const FlexibleTextArea: React.FC = () => (
    <>

        <TextArea rows={4} style={{ width: '950px' }} />

    </>
);