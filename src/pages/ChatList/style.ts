import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Main_Layout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  position: fixed;
`;

export const Main_Nothing = styled.div<{ isLoading: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  ${({ isLoading }) =>
    isLoading &&
    `
    justify-content: center; 
    align-items: center;
  `}
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
  overflow: auto;
`;

export const Main_Loading_Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Main_Loading = styled.img`
  width: 50px;
  height: 50px;
`;
