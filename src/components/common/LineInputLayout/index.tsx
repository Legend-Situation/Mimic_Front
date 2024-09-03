import React from 'react';
import * as _ from './style';

interface LineInputLayoutProps {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isEditing: boolean;
}

const LineInputLayout = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  isEditing
}: LineInputLayoutProps) => {
  return (
    <_.LineInputLayout_Container>
      <_.LineInputLayout_Label>{label}</_.LineInputLayout_Label>
      <_.LineInputLayout_Input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={!isEditing}
      />
    </_.LineInputLayout_Container>
  );
};

export default LineInputLayout;
