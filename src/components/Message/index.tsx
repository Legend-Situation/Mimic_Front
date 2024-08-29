// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import Loading from 'components/Loading';

interface MessageProps {
  role: string;
  message: string;
  isLoading: boolean;
}

const Message = ({ role, message: msg, isLoading }: MessageProps) => {
  return (
    <div>
      <_.Message_Box role={role}>{isLoading ? <Loading /> : msg}</_.Message_Box>
    </div>
  );
};

export default Message;
