import React from 'react';

import * as _ from './style';

interface OwnProps {
  value: string;
  onClick?(): void;
  width: string;
  state: boolean;
}

const ButtonLayout = ({
  value = '',
  onClick = () => {
    return;
  },
  width = '100%',
  state = false
}: OwnProps) => {
  return (
    <_.ButtonLayout_Container width={width}>
      <_.ButtonLayout_Button onClick={onClick} width={width} disabled={!state}>
        {value}
      </_.ButtonLayout_Button>
    </_.ButtonLayout_Container>
  );
};

export default ButtonLayout;
