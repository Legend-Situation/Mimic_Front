// 라이브러리
import React, { useState, useEffect } from 'react';

// 파일
import * as _ from './style';

interface TraitsInputLayoutProps {
  traits: string;
  onTraitsChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isEditing: boolean;
}

const TraitsInputLayout = ({ traits, onTraitsChange, isEditing }: TraitsInputLayoutProps) => {
  const [inputValue, setInputValue] = useState(traits);
  const maxLength = 500;

  useEffect(() => {
    setInputValue(traits);
  }, [traits]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    if (value.length <= maxLength) {
      setInputValue(value);
      onTraitsChange(e);
    }
  };

  const traitsLength = inputValue.length;

  return (
    <_.TraitsInputLayout_Container>
      <_.TraitsInputLayout_TraitsInput
        placeholder="상대방에 대해 알려주세요! (말투, 성격, mbti, 직업, 좋아하는 것 등)"
        value={inputValue}
        onChange={handleInputChange}
        maxLength={maxLength}
        isEditing={isEditing}
        disabled={!isEditing}
      />
      <_.TraitsInputLayout_CharCount>
        {traitsLength}/{maxLength}
      </_.TraitsInputLayout_CharCount>
    </_.TraitsInputLayout_Container>
  );
};

export default TraitsInputLayout;