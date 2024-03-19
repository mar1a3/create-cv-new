import React from 'react';
import { Select as AntdSelect, Space, SelectProps } from 'antd';
import { SelectWraper } from './style';

export const Select: React.FC<SelectProps<any>> = ({ options, title }) => {
  return (
    <SelectWraper>
      <p>{title}</p>
      <Space wrap>
        <AntdSelect
          defaultValue="Степень"
          style={{ width: 120 }}
          options={options}
        />
      </Space>
    </SelectWraper>
  );
};

