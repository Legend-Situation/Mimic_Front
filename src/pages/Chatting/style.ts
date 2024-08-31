import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Chatting_Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

export const Chatting_Content = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  background-color: ${theme.gray.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Chatting_Messages = styled.div`
  padding: 20px 15px 10px 15px;
  overflow: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  scroll-snap-type: y mandatory;
`;

export const Chatting_Typing_Container = styled.div`
  width: 100%;
  padding: 10px 30px 0 30px;
  z-index: 1;
  height: max-content;
  position: relative;
`;

export const Chatting_Typing_Box = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  max-height: 120px;
  justify-content: space-between;
  align-items: end;
  border-radius: 50px;
  border: 1px solid ${theme.gray[100]};
  padding: 13px 24px;
`;

export const Chatting_Textarea = styled.textarea`
  width: 86%;
  height: auto;
  max-height: 100px;
  padding: 2px;
  border: none;
  outline: none;
  color: ${theme.gray.black};
  &::placeholder {
    color: ${theme.gray[200]};
  }
  font-size: 17px;
  font-weight: 400;
  resize: none;
  overflow-y: auto;
`;

export const Chatting_SendIcon = styled.div`
  display: flex;
  align-items: center;
`;
