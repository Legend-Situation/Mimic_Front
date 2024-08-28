import React from 'react';
import * as _ from './style';
import Profile from 'assets/image/Profile.png';

const Chat = () => {
  return (
    <_.Chat_Layout>
      <_.Chat_Image src={Profile} />
      <_.Chat_Detail>
        <_.Chat_Name>조윤서</_.Chat_Name>
        <_.Chat_Content>가나다라마바사</_.Chat_Content>
      </_.Chat_Detail>
      <_.Chat_Time>오전 1:01</_.Chat_Time>
      <_.Chat_Count>N</_.Chat_Count>
    </_.Chat_Layout>
  );
};

export default Chat;
