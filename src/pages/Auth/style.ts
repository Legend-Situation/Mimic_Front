import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Auth_Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 70px 0 0 24px;
  display: flex;
  flex-direction: column;
`;

export const Auth_Title = styled.p`
  font-size: 30px;
  font-weight: 400;
  font-family: 'Pretendard-Bold';
  display: flex;
  flex-direction: row;
  align-items: end;
`;

export const Auth_Title_Highlight = styled.span`
  font-size: 30px;
  font-weight: 400;
  font-family: 'Pretendard-Bold';
  text-indent: -15px;
  color: ${theme.primary[6]};
`;

export const Auth_MainImg = styled.div`
  text-align: center;
  margin-right: 24px;
  margin-top: 100px;
`;

export const Auth_MainImg_Bubble = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0%, -50%);
  z-index: -1;
`;
