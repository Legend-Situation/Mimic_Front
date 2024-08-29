// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import Backward from 'assets/icon/Backward';
import { useNavigate } from 'react-router-dom';
import Property from 'assets/icon/Property';

interface MainHeaderProps {
  title: string;
  propertyIcon?: boolean;
}

const MainHeader = ({ title, propertyIcon = false }: MainHeaderProps) => {
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
      {propertyIcon && (
        <Property
          onClick={() => {
            return;
          }}
        />
      )}
    </_.MainHeader_Container>
  );
};

export default MainHeader;
