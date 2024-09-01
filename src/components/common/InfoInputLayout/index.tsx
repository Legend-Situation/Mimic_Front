// 라이브러리
import React, { useState, useEffect } from 'react';

// 파일
import * as _ from './style';

interface InfoInputLayoutProps {
  info: string;
  onInfoChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isEditing?: boolean;
}

const InfoInputLayout = ({
  info,
  onInfoChange,
  isEditing = true
}: InfoInputLayoutProps) => {
  const [inputValue, setInputValue] = useState(info);
  const maxLength = 500;

  useEffect(() => {
    setInputValue(info);
  }, [info]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    if (value.length <= maxLength) {
      setInputValue(value);
      onInfoChange(e);
    }
  };

  const infoLength = inputValue.length;

  return (
    <_.InfoInputLayout_Container>
      <_.InfoInputLayout_Input
        placeholder="상대방에 대해 알려주세요! (말투, 성격, mbti, 직업, 좋아하는 것 등)"
        value={inputValue}
        onChange={handleInputChange}
        maxLength={maxLength}
        isEditing={isEditing}
        disabled={!isEditing}
      />
      <_.InfoInputLayout_CharCount>
        {infoLength}/{maxLength}
      </_.InfoInputLayout_CharCount>
    </_.InfoInputLayout_Container>
  );
};

export default InfoInputLayout;
