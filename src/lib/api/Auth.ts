import { AuthInstance, DefaultInstance } from './customAxios';

interface SignUpParams {
  name: string;
  userid: string;
  password: string;
}

export const Auth_SignUp = async (params: SignUpParams) => {
  const { data } = await DefaultInstance.post(`/auth/signup`, params);
  return data;
};

interface LoginParams {
  userid: string;
  password: string;
}

export const Auth_Login = async (params: LoginParams) => {
  const { data } = await DefaultInstance.post(`/auth/signin`, params);
  return data;
};
