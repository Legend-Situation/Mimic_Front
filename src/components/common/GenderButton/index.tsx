import React from 'react';
import * as _ from './style';

interface GenderButtonProps {
  value: string;
  state?: boolean;
  onClick: () => void;
}

const GenderButton = ({ value, state = false, onClick }: GenderButtonProps) => {
  return (
    <_.GenderButton_Container>
      <_.GenderButton_Button state={state} onClick={onClick}>
        {value}
      </_.GenderButton_Button>
    </_.GenderButton_Container>
  );
};

export default GenderButton;