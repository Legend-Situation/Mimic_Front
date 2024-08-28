import React from 'react';
import * as _ from './style';
import MainHeader from 'components/MainHeader';
import Logo from 'assets/icon/Logo';
import InputLayout from 'components/common/InputLayout';
import ButtonLayout from 'components/common/ButtonLayout';

const Register = () => {
  const welcome = '미믹에 오신 것을\n진심으로 환영합니다!';
  return (
    <>
      <MainHeader title="회원가입" />
      <_.Register_Layout>
        <_.Register_Header>
          <Logo />
          <_.Register_Welcome>{welcome}</_.Register_Welcome>
          <_.Register_Guide>
            회원가입을 위한 정보를 입력해주세요.
          </_.Register_Guide>
        </_.Register_Header>
        <_.Register_Inputs>
          <InputLayout title="이름" placeholder="이름을 입력해주세요" />
          <InputLayout title="아이디" placeholder="아이디를 입력해주세요" />
          <InputLayout title="비밀번호" placeholder="비밀번호를 입력해주세요" />
          <InputLayout
            title="비빌번호 확인"
            placeholder="비빌번호 확인을 입력해주세요"
          />
        </_.Register_Inputs>
        <_.Register_Button>
          <ButtonLayout
            value="회원가입"
            onClick={() => {
              return 0;
            }}
            width="100%"
            state={false}
          />
        </_.Register_Button>
      </_.Register_Layout>
    </>
  );
};

export default Register;
