import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Login_Layout = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 40px);
  flex-direction: column;
  padding: 24px;
`;

export const Login_Header = styled.div`
  margin-top: 33px;
  display: flex;
  flex-direction: column;
  white-space: pre-line;
`;

export const Login_Welcome = styled.p`
  color: ${theme.gray.black};
  font-size: 24px;
  font-weight: 700;
  padding-top: 10px;
`;

export const Login_Guide = styled.p`
  color: ${theme.gray[400]};
  font-size: 16px;
  font-weight: 400;
  padding-top: 5px;
`;

export const Login_Inputs = styled.div`
  display: flex;
  padding-top: 30px;
  flex-direction: column;
  gap: 20px;
`;

export const Login_Button = styled.div`
  margin-top: 241px;
`;

export const Login_HelperList = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  justify-content: center;
`;

export const Login_Helper = styled.div`
  color: ${theme.gray[400]};
  font-size: 15px;
  font-weight: 400;
`;
