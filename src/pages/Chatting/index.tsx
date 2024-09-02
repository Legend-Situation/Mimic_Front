import React, { useEffect, useRef, useState } from 'react';
import MainHeader from 'components/Headers/MainHeader';
import Message from 'components/Message';
import * as _ from './style';
import Send from 'assets/icon/Send';
import { theme } from 'lib/utils/style/theme';
import { useQuery } from 'react-query';
import { Chat_Log } from 'lib/api/Chat';
import { ChatLog } from 'types/chatLog';
import { useParams } from 'react-router-dom';

const Chatting = () => {
  const [message, setMessage] = useState<string>('');
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [chatLog, setChatLog] = useState<ChatLog>();
  const params = useParams().id;

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessage('');
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    }
  };

  const resizeHeight = (
    textarea: React.RefObject<HTMLTextAreaElement>,
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (textarea.current) {
      textarea.current.style.height = 'auto';
      textarea.current.style.height = textarea.current.scrollHeight + 'px';
      setMessage(e.target.value);
    }
  };

  const { isLoading, data: newChatLog } = useQuery(
    'getChatLog',
    async () => {
      if (params) {
        return await Chat_Log(params);
      }
    },
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      retry: 0,
      onError: (err: any) => {
        console.log(err);
      },
      onSuccess: (res) => {
        setChatLog((prev) => ({
          ...prev,
          ...res
        }));
      }
    }
  );

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'auto' });
    }
  }, []);

  useEffect(() => {
    if (newChatLog && messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'auto' });
    }
  }, [newChatLog]);

  const chatHistories = chatLog?.data?.conversation?.messages || [];

  return (
    <_.Chatting_Layout>
      <MainHeader title={chatLog?.data?.name} propertyIcon={true} />
      <_.Chatting_Messages>
        {chatHistories
          ?.filter((item: any) => item.role !== 'system')
          .map((item: any, index: number) => {
            const messageText = item.content
              .map((contentItem: any) => contentItem.text)
              .join(' ');
            const messageRole = item.role;

            return (
              <Message
                key={index}
                name={chatLog?.data?.name ?? 'Unknown'}
                message={messageText}
                role={messageRole}
                isLoading={isLoading}
              />
            );
          })}
        <div ref={messageEndRef} />
      </_.Chatting_Messages>
      <_.Chatting_Typing_Container>
        <_.Chatting_Typing_Box>
          <_.Chatting_Textarea
            value={message}
            placeholder="메시지 보내기..."
            rows={1}
            maxLength={150}
            ref={textareaRef}
            onChange={(e) => resizeHeight(textareaRef, e)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <_.Chatting_SendIcon onClick={handleSendMessage}>
            <Send stroke={message ? theme.primary[6] : theme.gray[200]} />
          </_.Chatting_SendIcon>
        </_.Chatting_Typing_Box>
      </_.Chatting_Typing_Container>
    </_.Chatting_Layout>
  );
};

export default Chatting;
