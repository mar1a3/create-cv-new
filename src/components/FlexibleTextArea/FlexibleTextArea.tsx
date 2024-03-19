import React from 'react';
import { Input as AntdInput } from 'antd';
import { Wrapper } from './style';

const { TextArea } = AntdInput;

export const FlexibleTextArea: React.FC = () => (
    <>
        <Wrapper>
            <TextArea rows={4} style={{ width: '950px' }} />
        </Wrapper>
    </>
);