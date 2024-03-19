import React from 'react';
import { Select as AntdSelect, Space, SelectProps } from 'antd';
import { SelectWraper } from './style';

interface CustomSelectProps extends SelectProps<any> {
  title: string;
  defaultText?: string;
  onChange?: (value: any) => void;

}

export const Select: React.FC<CustomSelectProps> = ({ mode, options, title, defaultText, placeholder, onChange }) => {

  const handleSelectChange = (value: any) => {
    if (onChange) {
      onChange(value);
    }
  }

  return (
    <SelectWraper>
      <p>{title}</p>
      <Space wrap>
        <AntdSelect
          mode={mode}
          style={{ minWidth: '200px' }}
          defaultValue={defaultText}
          options={options}
          placeholder={placeholder}
          onChange={handleSelectChange}
        />
      </Space>

    </SelectWraper>
  );
};

