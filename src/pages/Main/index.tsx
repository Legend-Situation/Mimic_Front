import React, { useEffect, useState } from 'react';
import * as _ from './style';
import ChatHeader from 'components/Headers/ChatHeader';
import Logo from 'assets/icon/Logo';
import { theme } from 'lib/utils/style/theme';
import Chat from 'components/Chat';
import { useQuery } from 'react-query';
import { Chat_List } from 'lib/api/Chat';

type ChatItem = {
  chatId: string;
  profileImg: string;
  name: string;
  conversation: string;
};

const Main = () => {
  const [chatList, setChatList] = useState<ChatItem[]>([]);

  const { isLoading, data: newChatList } = useQuery('getChatList', Chat_List, {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 0,
    onError: (err: any) => {
      if (err.response?.status === 404) {
        setChatList([]);
      } else {
        console.error(err.response || err.message);
      }
    }
  });

  useEffect(() => {
    if (newChatList?.data) {
      setChatList(newChatList.data);
    }
  }, [newChatList]);

  return (
    <>
      <ChatHeader />
      <_.Main_Layout>
        {isLoading ? (
          <div>Loading...</div>
        ) : chatList.length ? (
          <_.Main_Chats>
            {chatList.map((chat) => (
              <Chat
                key={chat.chatId}
                image={chat.profileImg}
                name={chat.name}
                content={chat.conversation}
              />
            ))}
          </_.Main_Chats>
        ) : (
          <_.Main_Nothing>
            <Logo color={theme.gray[100]} />
            <_.Main_Notice>아직 채팅이 시작되지 않았어요...</_.Main_Notice>
            <_.Main_Add>상대방 추가하기</_.Main_Add>
          </_.Main_Nothing>
        )}
      </_.Main_Layout>
    </>
  );
};

export default Main;
