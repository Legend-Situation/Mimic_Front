import React from 'react';
import * as _ from './style';
import AuthLogo from 'assets/image/authLogo.png';
import Bubble from 'assets/image/Bubble';

const Auth = () => {
  return (
    <_.Auth_Container>
      <_.Auth_Title>
        잊고싶은 그 사람의 <br /> 외로움을 달래줄,
        <_.Auth_Title_Highlight>미믹</_.Auth_Title_Highlight>
      </_.Auth_Title>

      <_.Auth_MainImg>
        <img src={AuthLogo} alt="" />
        <_.Auth_MainImg_Bubble>
          <Bubble />
        </_.Auth_MainImg_Bubble>
      </_.Auth_MainImg>

      
    </_.Auth_Container>
  );
};

export default Auth;
