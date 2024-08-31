import React from 'react';
import * as _ from './style';

interface TraitsInputLayoutProps {
  traits: string;
  onTraitsChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  maxLength: number;
}

const TraitsInputLayout = ({ traits, onTraitsChange, maxLength }: TraitsInputLayoutProps) => {
  const traitsLength = traits.length;

  return (
    <_.TraitsInputLayout_Container>
      <_.TraitsInputLayout_Label>특징</_.TraitsInputLayout_Label>
      <_.TraitsInputLayout_TraitsInput
        placeholder="상대방에 대해 알려주세요! (말투, 성격, mbti, 직업, 좋아하는 것 등)"
        value={traits}
        onChange={onTraitsChange}
        maxLength={maxLength}
      />
      <_.TraitsInputLayout_CharCount>{traitsLength}/{maxLength}</_.TraitsInputLayout_CharCount>
    </_.TraitsInputLayout_Container>
  );
};

export default TraitsInputLayout;