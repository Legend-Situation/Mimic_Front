import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const ChatList_Layout = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 31px);
  flex-direction: column;
`;

export const ChatList_Nothing = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ChatList_Notice = styled.div`
  color: #d9d9d9;
  font-size: 18px;
  font-weight: 400;
`;

export const ChatList_Add = styled.div`
  padding: 13px 24px;
  border-radius: 5px;
  background: ${theme.gray[50]};
  color: ${theme.gray[400]};
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
`;
