// 라이브러리
import React, { useState } from 'react';

// 파일
import * as _ from './style';
import Backward from 'assets/icon/Backward';
import { useNavigate } from 'react-router-dom';
import Property from 'assets/icon/Property';

interface MainHeaderProps {
  title: string;
  propertyIcon?: boolean;
  control?: '편집' | '저장';
}

const MainHeader = ({
  title,
  propertyIcon = false,
  control
}: MainHeaderProps) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(control === '저장');

  const handleBackIcon = () => {
    navigate(-1);
  };

  const handleControlClick = () => {
    setIsEditing(!isEditing);
  };

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
      {control ? (
        <_.MainHeader_Control 
          control={isEditing ? '저장' : '편집'}
          onClick={handleControlClick}
        >
          {isEditing ? '저장' : '편집'}
        </_.MainHeader_Control>
      ) : (
        ''
      )}
    </_.MainHeader_Container>
  );
};

export default MainHeader;