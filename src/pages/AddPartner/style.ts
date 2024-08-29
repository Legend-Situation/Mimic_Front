import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const AddPartner_Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const AddPartner_Profile = styled.div`
width: 100px;
height: 100px;
`

export const Auth_Title_Highlight = styled.span`
  font-size: 30px;
  font-weight: 400;
  font-family: 'Pretendard-Bold';
  text-indent: -15px;
  color: ${theme.primary[6]};
`;

export const Auth_MainImg = styled.div`
  text-align: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const Auth_MainImg_Bubble = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0%, -50%);
  z-index: -1;
`;

export const Auth_Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${theme.gray[400]};
`;

export const Auth_Buttons_Register = styled.div`
  font-size: 16px;
  color: ${theme.gray.black};
`;
