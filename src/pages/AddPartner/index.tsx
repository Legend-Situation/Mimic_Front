import React from 'react';
import * as _ from './style';
import ButtonLayout from 'components/common/ButtonLayout';
import MainHeader from 'components/Headers/MainHeader';
import ProfileLayout from 'components/common/ProfileLayout'


const AddPartner = () => {
  return (
    <_.AddPartner_Container>
      <MainHeader title="상대방 추가"/>
      <ProfileLayout/>
    </_.AddPartner_Container>
  );
};

export default AddPartner;