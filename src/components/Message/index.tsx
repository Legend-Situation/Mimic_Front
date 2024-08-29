// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';

interface MessageProps {
  role: string;
  message: string;
  isLoading: boolean;
  children?: React.ReactNode;
}

const Message = ({ role, message: msg, isLoading }: MessageProps) => {
  return (
    <_.Message_Container role={role}>
      {isLoading ? msg : msg}
    </_.Message_Container>
  );
};

export default Message;
