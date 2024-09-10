import React, { useEffect, useState } from 'react';
import * as _ from './style';
import MainHeader from 'components/Headers/MainHeader';
import Logo from 'assets/icon/Logo';
import InputLayout from 'components/common/InputLayout';
import ButtonLayout from 'components/common/ButtonLayout';
import { useMutation, useQuery } from 'react-query';
import { Auth_SignUp, Auth_UserState } from 'lib/api/Auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const welcome = '미믹에 오신 것을\n진심으로 환영합니다!';
  const [inputs, setInputs] = useState({
    name: '',
    userid: '',
    password: '',
    passwordCheck: ''
  });

  const { isSuccess } = useQuery('getUserState', Auth_UserState, {
    refetchOnWindowFocus: false,
    retry: 0
  });

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
    }
  }, [isSuccess, navigate]);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const isFormValid = () => {
    const { name, userid, password, passwordCheck } = inputs;
    return (
      name !== '' &&
      userid !== '' &&
      password !== '' &&
      passwordCheck !== '' &&
      password === passwordCheck
    );
  };

  const { mutate: SignUpMutate } = useMutation(Auth_SignUp, {
    onSuccess: (res) => {
      alert(res.message);
      navigate('/login');
    },
    onError: (err: any) => {
      alert(err.response.data?.message);
    }
  });

  const onSubmit = () => {
    if (!isFormValid()) return;
    SignUpMutate({
      userid: inputs.userid,
      password: inputs.password,
      name: inputs.name
    });
  };

  return (
    <_.Register_Layout>
      <MainHeader title="회원가입" />
      <_.Register_Container>
        <_.Register_Header>
          <Logo />
          <_.Register_Welcome>{welcome}</_.Register_Welcome>
          <_.Register_Guide>
            회원가입을 위한 정보를 입력해주세요.
          </_.Register_Guide>
        </_.Register_Header>
        <_.Register_Inputs>
          <InputLayout
            value={inputs.name}
            name="name"
            title="이름"
            placeholder="이름을 입력해주세요"
            onChange={handleInputValue}
          />
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
          <InputLayout
            value={inputs.passwordCheck}
            name="passwordCheck"
            title="비빌번호 확인"
            placeholder="비빌번호 확인을 입력해주세요"
            onChange={handleInputValue}
            type="password"
          />
        </_.Register_Inputs>
        <_.Register_Button>
          <ButtonLayout
            value="회원가입"
            onClick={onSubmit}
            width="100%"
            state={isFormValid()}
          />
        </_.Register_Button>
      </_.Register_Container>
    </_.Register_Layout>
  );
};

export default Register;
