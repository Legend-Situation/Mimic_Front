import React, { useEffect, useState } from 'react';
import * as _ from './style';
import ChatHeader from 'components/Headers/ChatHeader';
import Logo from 'assets/icon/Logo';
import { theme } from 'lib/utils/style/theme';
import Chat from 'components/Chat';
import { useQuery } from 'react-query';
import { Chat_List } from 'lib/api/Chat';
import Loading from 'assets/image/Loading.gif';
import { useNavigate } from 'react-router-dom';
import Profile from 'assets/image/Profile.png';
import { Auth_UserState } from 'lib/api/Auth';

type ChatItem = {
  chatid: string;
  profileImg: string;
  name: string;
  age: string;
  gender: string;
  conversation: {
    messages: { role: string; content: { text: string }[] }[];
    [key: string]: any;
  };
};

const Main = () => {
  const navigate = useNavigate();
  const [chatList, setChatList] = useState<ChatItem[]>([]);

  const { isLoading: newChatLisLoading, data: newChatList } = useQuery(
    'getChatList',
    Chat_List,
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      retry: 0,
      onError: (err: any) => {
        if (err.response?.status === 404) {
          setChatList([]);
        } else {
          console.error(err.response || err.message);
        }
      },
      onSuccess: (data) => {
        setChatList(data.data);
      }
    }
  );

  const { isError } = useQuery('getUserState', Auth_UserState, {
    refetchOnWindowFocus: false,
    retry: 0
  });

  useEffect(() => {
    if (isError) {
      navigate('/login');
    }
  });

  useEffect(() => {
    if (newChatList?.data) {
      setChatList(newChatList.data);
    }
  }, [newChatList]);

  const reverseChatList = [...chatList].reverse();

  return (
    <_.Main_Layout>
      <ChatHeader />
      {newChatLisLoading ? (
        <_.Main_Loading_Container>
          <_.Main_Loading src={Loading} alt="로딩" />
        </_.Main_Loading_Container>
      ) : chatList.length ? (
        <_.Main_Chats>
          {reverseChatList.map((chat, index) => {
            const lastMessage = chat.conversation?.messages?.slice(-1)[0];

            const lastContent =
              lastMessage?.content?.[0]?.text || '메시지 없음';

            return (
              <Chat
                key={`${chat.chatid}-${index}`}
                chatid={chat.chatid}
                image={chat.profileImg || Profile}
                name={chat.name}
                content={lastContent}
              />
            );
          })}
        </_.Main_Chats>
      ) : (
        <_.Main_Nothing isLoading={newChatLisLoading}>
          <Logo color={theme.gray[100]} />
          <_.Main_Notice>아직 채팅이 시작되지 않았어요...</_.Main_Notice>
          <_.Main_Add
            onClick={() => {
              navigate('/addPartner');
            }}
          >
            상대방 추가하기
          </_.Main_Add>
        </_.Main_Nothing>
      )}
    </_.Main_Layout>
  );
};

export default Main;
