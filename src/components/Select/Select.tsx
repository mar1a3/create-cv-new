import React from 'react';
import { Select, Space } from 'antd';
import { SelectWraper } from './style';

interface SelectProps {
  title?: string;
  options: {
    value: string; label: string;
  }[];
}

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export const UserSelect: React.FC<SelectProps> = ({ options, title }) => {
  return (
    <SelectWraper>
      <p>{title}</p>
      <Space wrap>
        <Select
          defaultValue="Степень"
          style={{ width: 120 }}
          onChange={handleChange}
          options={options}
        />
      </Space>
    </SelectWraper>
  );
};

