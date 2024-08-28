import React, { useState } from 'react';
import * as _ from './style';

interface InputLayoutProps {
  title: string;
  placeholder: string;
}

const InputLayout = ({ title, placeholder }: InputLayoutProps) => {
  const [input, setInput] = useState('');
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <_.InputLayout_Container>
      <_.InputLayout_Input_Title>
        {title}
        <_.InputLayout_Input_Title_Star>*</_.InputLayout_Input_Title_Star>
      </_.InputLayout_Input_Title>
      <_.InputLayout_Box
        type="text"
        placeholder={placeholder}
        onChange={handleInput}
        autoComplete="off"
      />
    </_.InputLayout_Container>
  );
};

export default InputLayout;
