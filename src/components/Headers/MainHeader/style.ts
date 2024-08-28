import styled from 'styled-components';
import { theme } from 'lib/utils/style/theme';

export const MainHeader_Container = styled.div<{ isOnChatting?: boolean }>`
  width: 100vw;
  height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
  flex-shrink: 0;
  position: relative;
`;

export const MainHeader_BackIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const MainHeader_Title = styled.div`
  font-weight: 600;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: ${theme.gray.black};
  font-size: 17px;
  font-weight: 600;
`;

export const MainHeader_Button = styled.div<{ ButtonColor?: string }>`
  color: ${(props) => props.ButtonColor};
  font-size: 15px;
  font-weight: 500;
`;
