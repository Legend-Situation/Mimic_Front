import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const GenderButton_Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const GenderButton_Button = styled.button<{ state: boolean }>`
  width: 100%;
  height: 48px;
  display: flex;
  padding: 14px 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ state }) => (state ? theme.primary[6] : theme.gray.white)};
  color: ${({ state }) => (state ? theme.gray.white : theme.gray.black)};
  border-radius: 8px;
  border: 1.5px solid ${theme.gray[100]};
  font-size: 14px;
  font-weight: 500;
`;


