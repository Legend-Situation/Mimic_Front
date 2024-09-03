import React, { useEffect } from 'react';
import * as _ from './style';
import AuthLogo from 'assets/image/authLogo.png';
import Bubble from 'assets/image/Bubble';
import ButtonLayout from 'components/common/ButtonLayout';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Auth_UserState } from 'lib/api/Auth';

const Auth = () => {
  const history = useNavigate();

  const { isSuccess } = useQuery('getUserState', Auth_UserState, {
    refetchOnWindowFocus: false,
    retry: 0
  });

  useEffect(() => {
    if (isSuccess) {
      history('/');
    }
  });

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

      <_.Auth_Buttons>
        <ButtonLayout
          value="로그인"
          onClick={() => {
            history('/login');
          }}
          width="100%"
          state={true}
        />
        또는
        <_.Auth_Buttons_Register
          onClick={() => {
            history('/register');
          }}
        >
          회원가입
        </_.Auth_Buttons_Register>
      </_.Auth_Buttons>
    </_.Auth_Container>
  );
};

export default Auth;
