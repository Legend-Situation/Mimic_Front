import React from 'react';
import * as _ from './style';
import Profile from 'assets/image/Profile.png';
import ProfileEdit from 'assets/icon/ProfileEdit';


const ProfileLayout = () => {
  return (
    <_.ProfileLayout_Layout>
    <_.ProfileLayout_Container>
      <_.ProfileLayout_Image src={Profile} />
      <_.ProfileLayout_ProfileEdit>
        <ProfileEdit/>
      </_.ProfileLayout_ProfileEdit>
    </_.ProfileLayout_Container>
    </_.ProfileLayout_Layout>
  );
};

export default ProfileLayout;
