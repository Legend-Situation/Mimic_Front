// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import Plus from 'assets/icon/Plus';
import { useNavigate } from 'react-router-dom';
import Logout from 'assets/icon/Logout';

const ChatHeader = () => {
  const history = useNavigate();

  return (
    <_.ChatHeader_Layout>
      <_.ChatHeader_Title>채팅</_.ChatHeader_Title>
      <_.ChatHeader_Icons>
        <Plus
          onClick={() => {
            history('/addpartner');
          }}
        />
        <Logout />
      </_.ChatHeader_Icons>
    </_.ChatHeader_Layout>
  );
};

export default ChatHeader;
