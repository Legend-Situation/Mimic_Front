import React from 'react';
import * as _ from './style';
import MainHeader from 'components/Headers/MainHeader';
import ProfileLayout from 'components/common/ProfileLayout';
import ButtonLayout from 'components/common/ButtonLayout';

const UserDetails = () => {
  return (
    <_.UserDetails_Layout>
      <MainHeader title="" propertyIcon={false} control={undefined} />
      <_.UserDetails_Container>
        <ProfileLayout edit={false} />
        <_.UserDetails_Name>사용자 이름</_.UserDetails_Name>
      </_.UserDetails_Container>
      <_.UserDetails_Box>
        <ButtonLayout
          value="상대방 삭제하기"
          state={true}
          width='100%'
          backgroundColor="#ffffff"
          borderColor="#FF6B6B"
          textColor="#ff6b6b"
        />
      </_.UserDetails_Box>
    </_.UserDetails_Layout>
  );
};

export default UserDetails;