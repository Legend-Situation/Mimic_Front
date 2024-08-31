import styled from 'styled-components';
import { theme } from 'lib/utils/style/theme';

export const UserProfile_Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const UserProfile_Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;
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

export const UserProfile_TextArea = styled.textarea`
  width: 100%;
  padding: 15px 16px;
  border: 1px solid ${theme.gray[300]};
  border-radius: 8px;
  font-size: 15px;
  color: ${theme.gray.black};
  outline: none;
  resize: none;

  &::placeholder {
    color: ${theme.gray[500]};
  }
`;
