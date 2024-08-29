import React from 'react';
import * as _ from './style';
import ButtonLayout from 'components/common/ButtonLayout';
import MainHeader from 'components/Headers/MainHeader';


const AddPartner = () => {
  return (
    <_.AddPartner_Container>
      <MainHeader title="상대방 추가"/>
    </_.AddPartner_Container>
  );
};

export default AddPartner;