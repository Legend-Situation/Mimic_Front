import styled from 'styled-components';
import { theme } from 'lib/utils/style/theme';

export const MyPage_Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const MyPage_Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const MyPage_Name = styled.p`
  font-size: 17px;
  font-weight: 600;
  text-align: center;
  margin: 15px 0;
  color: ${theme.gray.black};
`;

export const MyPage_IdBox = styled.div`
  width: 100%;
  height: 52px;
  color: ${theme.gray[400]};
  font-size: 16px;
  font-weight: 400;
  padding: 16px;
  background-color: ${theme.gray[50]};
  justify-content: center;
  border-radius: 8px;
  margin-top: 20px;
`;
export const MyPage_Button = styled.div`
  padding: 20px;
`;
