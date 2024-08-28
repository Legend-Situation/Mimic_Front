import React from 'react';
import * as _ from './style';

interface InputLayoutProps {
  title: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const InputLayout = ({
  title,
  placeholder,
  name,
  value,
  onChange,
  type = 'text'
}: InputLayoutProps) => {
  return (
    <_.InputLayout_Container>
      <_.InputLayout_Input_Title>
        {title}
        <_.InputLayout_Input_Title_Star>*</_.InputLayout_Input_Title_Star>
      </_.InputLayout_Input_Title>
      <_.InputLayout_Box
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        name={name}
        onChange={onChange}
      />
    </_.InputLayout_Container>
  );
};

export default InputLayout;
