import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Main_Layout = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 40px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Main_Nothing = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Main_Notice = styled.div`
  color: #d9d9d9;
  font-size: 18px;
  font-weight: 400;
`;

export const Main_Add = styled.div`
  padding: 13px 24px;
  border-radius: 5px;
  background: ${theme.gray[50]};
  color: ${theme.gray[400]};
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
`;

export const Main_Chats = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

export const Main_Loading = styled.img`
  width: 50px;
  height: 50px;
`;
