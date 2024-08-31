import styled from 'styled-components';
import { theme } from 'lib/utils/style/theme';

export const UserDetails_Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const UserDetails_Container = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const UserDetails_Name = styled.p`
  font-size: 17px;
  font-weight: 600;
  text-align: center;
  margin-top: 15px;
  color: ${theme.gray.black};
`;

export const UserDetails_Box = styled.div`
  width: 100%;
  background-color: ${theme.gray[50]};
  height: 680px;
`;