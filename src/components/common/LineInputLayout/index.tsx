import React from 'react';
import * as _ from './style';

interface LineInputLayoutProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LineInputLayout = ({ label, placeholder, value }: LineInputLayoutProps) => {
  return (
    <_.LineInputLayout_Container>
      {label && <_.LineInputLayout_Label>{label}</_.LineInputLayout_Label>}
      <_.LineInputLayout_Input
        placeholder={placeholder}
        value={value}
      />
    </_.LineInputLayout_Container>
  );
};

export default LineInputLayout;