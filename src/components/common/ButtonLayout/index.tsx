// 파일
import React from 'react';
import * as _ from './style';

interface OwnProps {
  value: string;
  onClick?(): void;
  width: string;
  state: boolean;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
}

const ButtonLayout = ({
  value = '',
  onClick = () => {
    return;
  },
  width = '100%',
  state = false,
  backgroundColor = '',
  borderColor = '',
  textColor = ''
}: OwnProps) => {
  return (
    <_.ButtonLayout_Button
      onClick={onClick}
      width={width}
      disabled={!state}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      textColor={textColor}
    >
      {value}
    </_.ButtonLayout_Button>
  );
};

export default ButtonLayout;
