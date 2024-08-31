// 라이브러리
import React from 'react';

// 파일
import { useNavigate } from 'react-router-dom';
import * as _ from './style';
import MainHeader from 'components/Headers/MainHeader';
import ProfileLayout from 'components/common/ProfileLayout';
import ButtonLayout from 'components/common/ButtonLayout';

const UserDetails = () => {
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    navigate('/chatList');
  };

  return (
    <_.UserDetails_Layout>
      <MainHeader />
      <_.UserDetails_Container>
        <ProfileLayout edit={false} />
        <_.UserDetails_Name>사용자 이름</_.UserDetails_Name>
      </_.UserDetails_Container>
      <_.UserDetails_Box>
        <ButtonLayout
          value="상대방 삭제하기"
          state={true}
          width="100%"
          backgroundColor="#ffffff"
          borderColor="#FF6B6B"
          textColor="#ff6b6b"
          onClick={handleDeleteClick}
        />
      </_.UserDetails_Box>
    </_.UserDetails_Layout>
  );
};

export default UserDetails;
