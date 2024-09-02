import React from 'react';
import * as _ from './style';
import Loading from 'components/Loading';
import Profile from 'assets/image/Profile.png';

interface MessageProps {
  role: string;
  message: string;
  isLoading: boolean;
  name: string;
}

const Message = ({ role, message: msg, isLoading, name }: MessageProps) => {
  return (
    <_.Message_Layout role={role}>
      {role === 'assistant' ? <_.Message_Image src={Profile} /> : ''}
      <_.Message_Right>
        {role === 'assistant' ? <_.Message_Name>{name}</_.Message_Name> : ''}
        <_.Message_Box role={role}>
          {isLoading ? <Loading /> : msg}
        </_.Message_Box>
      </_.Message_Right>
    </_.Message_Layout>
  );
};

export default Message;
