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
