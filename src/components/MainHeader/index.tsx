// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import Backward from 'assets/icon/Backward';
import { useNavigate } from 'react-router-dom';
import KebabIcon from 'assets/icon/KebabIcon';

interface MainHeaderProps {
  title: string;
  kebabIcon?: boolean;
}

const MainHeader = ({ title, kebabIcon = false }: MainHeaderProps) => {
  const navigate = useNavigate();

  const handleBackIcon = () => {
    navigate(-1);
  };

  console.log(title);

  return (
    <_.MainHeader_Container>
      <_.MainHeader_BackIcon onClick={handleBackIcon}>
        <Backward />
      </_.MainHeader_BackIcon>
      <_.MainHeader_Title>{title ? title : ' '}</_.MainHeader_Title>
      {kebabIcon && (
        <_.MainHeader_Button
          onClick={() => {
            return;
          }}
        >
          <KebabIcon />
        </_.MainHeader_Button>
      )}
    </_.MainHeader_Container>
  );
};

export default MainHeader;
