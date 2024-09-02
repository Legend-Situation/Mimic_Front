import React from 'react';

import * as _ from './style';
import MainHeader from 'components/Headers/MainHeader';
import ProfileLayout from 'components/common/ProfileLayout';
import ButtonLayout from 'components/common/ButtonLayout';

const MyPage = () => {
  const userName = '걍민지';
  const userId = 'rkdalswl718';

  return (
    <_.MyPage_Layout>
      <MainHeader title="내 정보" />
      <_.MyPage_Container>
        <ProfileLayout edit={true} />
        <_.MyPage_Name>{userName}</_.MyPage_Name>
        <_.MyPage_IdBox>아이디 : {userId}</_.MyPage_IdBox>
      </_.MyPage_Container>
      <_.MyPage_Button>
        <ButtonLayout
          value="로그아웃"
          state={true}
          width="100%"
          backgroundColor="#ffffff"
          borderColor="#FF6B6B"
          textColor="#ff6b6b"
        />
      </_.MyPage_Button>
    </_.MyPage_Layout>
  );
};

export default MyPage;
