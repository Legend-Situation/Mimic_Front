import styled from 'styled-components';
import { theme } from 'lib/utils/style/theme';

export const UserProfile_Layout = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px 40px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 15px;
`;

export const UserProfile_TextAreaBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserProfile_Label = styled.label`
  font-size: 14px;
  color: ${theme.gray[300]};
  margin-bottom: 8px;
`;

export const UserProfile_Button = styled.div`
  margin-top: 175px;
`;
