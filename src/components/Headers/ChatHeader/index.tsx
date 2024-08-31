// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import Plus from 'assets/icon/Plus';

const ChatHeader = () => {
  const handlePlusButton = () => {
    return;
  };
  return (
    <_.ChatHeader_Layout>
      <_.ChatHeader_Title>채팅</_.ChatHeader_Title>
      <_.ChatHeader_Icons>
        <Plus onClick={handlePlusButton} />
        <_.ChatHeader_Image />
      </_.ChatHeader_Icons>
    </_.ChatHeader_Layout>
  );
};

export default ChatHeader;
