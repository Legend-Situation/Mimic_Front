import styled from 'styled-components';
import { theme } from 'lib/utils/style/theme';

interface ChatUploadProps {
  isUploaded: boolean;
}

export const ChatUpload_Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
gap: 8px;
margin-bottom: 30px;
`;

export const ChatUpload_Layout = styled.div<ChatUploadProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 130px;
  padding: 16px;
  border-radius: 8px;
  background: ${({ isUploaded }) =>
    isUploaded ? theme.primary[6] : theme.gray[50]};
  color: ${({ isUploaded }) => (isUploaded ? 'white' : theme.gray.black)};
`;

export const ChatUpload_TextContainer = styled.div`
  margin-bottom: 16px;
  text-align: left;
`;

export const ChatUpload_Title = styled.p<ChatUploadProps>`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 4px;
  color: ${({ isUploaded }) => (isUploaded ? 'white' : theme.gray.black)};
`;

export const ChatUpload_Description = styled.p<ChatUploadProps>`
  font-size: 13px;
  color: ${({ isUploaded }) => (isUploaded ? 'white' : theme.primary[6])};
`;

export const ChatUpload_ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
`;

export const ChatUpload_Button = styled.button<ChatUploadProps>`
  display: flex;
  border: none;
  border-radius: 72px;
  background-color: ${({ isUploaded }) =>
    isUploaded ? 'white' : theme.primary[6]};
  color: ${({ isUploaded }) => (isUploaded ? theme.gray.black : 'white')};
  font-size: 14px;
  height: 40px;
  padding: 12px 14px;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2px;
  cursor: pointer;
  &:hover {
    background-color: ${({ isUploaded }) =>
      isUploaded ? theme.gray.white : theme.primary[5]};
  }
`;

export const ChatUpload_Info = styled.p`
  font-size: 12px;
  color: ${theme.gray[300]};
`;

export const ChatUpload_Delete = styled.div`
  position: absolute;
  top: -16px;
  right: -16px;
  cursor: pointer;
`;

export const ChatUpload_HiddenFileInput = styled.input`
  display: none;
`;

export const ChatUpload_DropdownContainer = styled.div`

`;

export const ChatUpload_DropdownWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const ChatUpload_Dropdown = styled.select`
  height: 48px;
  width: 100%;
  padding: 12px 16px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid ${theme.gray[300]};
  background-color: white;
  color: ${theme.gray.black};
  appearance: none;

  &:focus {
    border-color:${theme.primary[6]};
    outline: none;
  }
  `

export const ChatUpload_Option = styled.option`
  padding: 8px;
  font-size: 14px;
  color: ${theme.gray.black};
  background-color: white;
`;

export const ChatUpload_Arrow = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  pointer-events: none;
`;