import React from 'react';
import * as _ from './style';
import ChatHeader from 'components/Headers/ChatHeader';
import Logo from 'assets/icon/Logo';
import { theme } from 'lib/utils/style/theme';
import { chatList } from 'data/chats';
import Chat from 'components/Chat';

const ChatList = () => {
  return (
    <>
      <ChatHeader />
      <_.ChatList_Layout>
        {chatList ? (
          <_.ChatList_Chats>
            {/* {chatList.map((chat) => (
              <Chat key={chat.name} />
            ))} */}
            <Chat />
          </_.ChatList_Chats>
        ) : (
          <_.ChatList_Nothing>
            <Logo color={theme.gray[100]} />
            <_.ChatList_Notice>
              아직 채팅이 시작되지 않았어요...
            </_.ChatList_Notice>
            <_.ChatList_Add>상대방 추가하기</_.ChatList_Add>
          </_.ChatList_Nothing>
        )}
      </_.ChatList_Layout>
    </>
  );
};

export default ChatList;
