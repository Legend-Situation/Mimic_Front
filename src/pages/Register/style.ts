import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Register_Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

export const Register_Header = styled.div`
  margin-top: 33px;
  display: flex;
  flex-direction: column;
  white-space: pre-line;
`;

export const Register_Welcome = styled.p`
  color: ${theme.gray.black};
  font-size: 24px;
  font-weight: 700;
  padding-top: 10px;
`;

export const Register_Guide = styled.p`
  color: ${theme.gray[400]};
  font-size: 16px;
  font-weight: 400;
  padding-top: 5px;
`;

export const Register_Inputs = styled.div`
  display: flex;
  padding-top: 30px;
  flex-direction: column;
  gap: 20px;
`;

export const Register_Button = styled.div`
  margin-top: 77px;
`;
