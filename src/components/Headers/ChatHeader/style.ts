import styled from 'styled-components';
import { theme } from 'lib/utils/style/theme';

export const ChatHeader_Layout = styled.div`
  display: flex;
  padding: 5px 24px;
  justify-content: space-between;
  align-items: center;
`;

export const ChatHeader_Title = styled.p`
  color: ${theme.gray.black};
  font-size: 24px;
  font-weight: 700;
`;

export const ChatHeader_Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ChatHeader_Image = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 19px;
  background: #9a9a9a;
`;
