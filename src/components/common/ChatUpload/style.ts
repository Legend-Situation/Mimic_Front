import styled from 'styled-components';
import { theme } from 'lib/utils/style/theme';

export const ChatUpload_Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const ChatUpload_Layout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background: ${theme.gray[50]};
`;

export const ChatUpload_TextContainer = styled.div`
  margin-bottom: 16px;
  text-align: left;
`;

export const ChatUpload_Title = styled.h1`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 4px;
  color: ${theme.gray.black};
`;

export const ChatUpload_Description = styled.p`
  font-size: 13px;
  color: ${theme.primary[6]};
`;

export const ChatUpload_ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
`;

export const ChatUpload_Button = styled.button`
  display: flex;
  border: none;
  border-radius: 72px;
  background-color: ${theme.primary[6]};
  color: white;
  font-size: 14px;
  height: 40px;
  padding: 12px 14px;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.primary[5]};
  }
`;

export const ChatUpload_Info = styled.p`
  font-size: 12px;
  color: ${theme.gray[300]};
  margin-top: 8px;
`;

export const ChatUpload_Delete = styled.div`
  position: absolute;
  top: -16px;
  right: -16px;
`;
