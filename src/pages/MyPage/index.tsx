import React from 'react';


import * as _ from './style';
import MainHeader from 'components/Headers/MainHeader';

const MyPage = () => {
  return (
    <_.MyPage_Layout>
      <MainHeader title='내 정보'/>
      <_.MyPage_Container>

      </_.MyPage_Container>
    </_.MyPage_Layout>
  );
};

export default MyPage;