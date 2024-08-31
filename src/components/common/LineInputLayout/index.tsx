import React from 'react';
import * as _ from './style';

interface LineInputLayoutProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isEditing: boolean;
}

const LineInputLayout = ({
  label,
  placeholder,
  value,
  onChange,
  isEditing,
}: LineInputLayoutProps) => {
  return (
    <_.LineInputLayout_Container>
      <_.LineInputLayout_Label>{label}</_.LineInputLayout_Label>
      <_.LineInputLayout_Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={!isEditing}
      />
    </_.LineInputLayout_Container>
  );
};

export default LineInputLayout;