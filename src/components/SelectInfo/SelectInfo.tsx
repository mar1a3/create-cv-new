import React from 'react';
import { Select, Space } from 'antd';
import { SelectWraper } from './style';
import { SelectProps } from 'antd/es/select';

export const SelectInfo: React.FC<SelectProps<any>> = ({ options, title }) => {
  return (
    <SelectWraper>
      <p>{title}</p>
      <Space wrap>
        <Select
          defaultValue="Степень"
          style={{ width: 120 }}
          options={options}
        />
      </Space>
    </SelectWraper>
  );
};

