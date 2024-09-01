import React from 'react';
import * as _ from './style';

interface ChatProps {
  image: string;
  name: string;
  content: string;
  time?: string;
}

const Chat = ({ image, name, content, time }: ChatProps) => {
  return (
    <_.Chat_Layout>
      <_.Chat_Image src={image} />
      <_.Chat_Detail>
        <_.Chat_Name>{name}</_.Chat_Name>
        <_.Chat_Content>{content}</_.Chat_Content>
      </_.Chat_Detail>
      {/* <_.Chat_Time>{time}</_.Chat_Time> */}
      <_.Chat_Count>N</_.Chat_Count>
    </_.Chat_Layout>
  );
};

export default Chat;
