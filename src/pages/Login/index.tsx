import React, { useEffect, useState } from 'react';
import * as _ from './style';
import MainHeader from 'components/Headers/MainHeader';
import Logo from 'assets/icon/Logo';
import InputLayout from 'components/common/InputLayout';
import ButtonLayout from 'components/common/ButtonLayout';
import { useMutation, useQuery } from 'react-query';
import { Auth_Login, Auth_UserState } from 'lib/api/Auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const welcome = '미-믹\n돌아오신 것을 환영합니다';
  const [inputs, setInputs] = useState({
    userid: '',
    password: ''
  });

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const isFormValid = () => {
    const { userid, password } = inputs;
    return userid == '' || password == '';
  };

  const { mutate: LoginMutate } = useMutation(Auth_Login, {
    onSuccess: (res) => {
      localStorage.setItem('accessToken', res.accessToken);
      localStorage.setItem('refreshToken', res.refreshToken);
      alert(res.message);
      navigate('/');
    },
    onError: (err: any) => {
      alert(err.response.data?.message);
    }
  });

  const onSubmit = () => {
    LoginMutate({ userid: inputs.userid, password: inputs.password });
  };

  const { isSuccess } = useQuery('getUserState', Auth_UserState, {
    refetchOnWindowFocus: false,
    retry: 0
  });

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
    }
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <>
      <MainHeader title="로그인" />
      <_.Login_Layout onKeyDown={handleKeyDown}>
        <_.Login_Header>
          <Logo />
          <_.Login_Welcome>{welcome}</_.Login_Welcome>
          <_.Login_Guide>로그인 정보를 입력해주세요.</_.Login_Guide>
        </_.Login_Header>
        <_.Login_Inputs>
          <InputLayout
            value={inputs.userid}
            name="userid"
            title="아이디"
            placeholder="아이디를 입력해주세요"
            onChange={handleInputValue}
          />
          <InputLayout
            value={inputs.password}
            name="password"
            title="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            onChange={handleInputValue}
            type="password"
          />
        </_.Login_Inputs>
        <_.Login_HelperList>
          <_.Login_Helper>비밀번호찾기</_.Login_Helper>
          <_.Login_Helper>|</_.Login_Helper>
          <_.Login_Helper>아이디찾기</_.Login_Helper>
          <_.Login_Helper>|</_.Login_Helper>
          <_.Login_Helper
            onClick={() => {
              navigate('/register');
            }}
          >
            회원가입
          </_.Login_Helper>
        </_.Login_HelperList>
        <_.Login_Button>
          <ButtonLayout
            value="로그인"
            onClick={onSubmit}
            width="100%"
            state={!isFormValid()}
          />
        </_.Login_Button>
      </_.Login_Layout>
    </>
  );
};

export default Login;
