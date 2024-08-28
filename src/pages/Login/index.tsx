import React, { useState } from 'react';
import * as _ from './style';
import MainHeader from 'components/MainHeader';
import Logo from 'assets/icon/Logo';
import InputLayout from 'components/common/InputLayout';
import ButtonLayout from 'components/common/ButtonLayout';

const Login = () => {
  const welcome = '미-믹\n돌아오신 것을 환영합니다';
  const [inputs, setInputs] = useState({
    id: '',
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
    const { id, password } = inputs;
    return id == '' || password == '';
  };

  return (
    <>
      <MainHeader title="회원가입" />
      <_.Login_Layout>
        <_.Login_Header>
          <Logo />
          <_.Login_Welcome>{welcome}</_.Login_Welcome>
          <_.Login_Guide>로그인 정보를 입력해주세요.</_.Login_Guide>
        </_.Login_Header>
        <_.Login_Inputs>
          <InputLayout
            value={inputs.id}
            name="id"
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
          <_.Login_Helper
            onClick={() => {
              return;
            }}
          >
            비밀번호찾기
          </_.Login_Helper>
          <_.Login_Helper>|</_.Login_Helper>
          <_.Login_Helper
            onClick={() => {
              return;
            }}
          >
            아이디찾기
          </_.Login_Helper>
          <_.Login_Helper>|</_.Login_Helper>
          <_.Login_Helper
            onClick={() => {
              return;
            }}
          >
            회원가입
          </_.Login_Helper>
        </_.Login_HelperList>
        <_.Login_Button>
          <ButtonLayout
            value="로그인"
            onClick={() => {
              return;
            }}
            width="100%"
            state={!isFormValid()}
          />
        </_.Login_Button>
      </_.Login_Layout>
    </>
  );
};

export default Login;
