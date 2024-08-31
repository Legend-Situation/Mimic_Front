import React, { useEffect, useRef, useState } from 'react';
import MainHeader from 'components/Headers/MainHeader';
import Message from 'components/Message';
import * as _ from './style';
import Send from 'assets/icon/Send';
import { theme } from 'lib/utils/style/theme';
import chatLog from 'data/chatLog';

const Chatting = () => {
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

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

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const chatHistories = chatLog.data.conversation.messages;

  return (
    <_.Chatting_Layout>
      <MainHeader title="사용자이름" propertyIcon={true} />
      <_.Chatting_Messages>
        {chatHistories.map((item: any, index: any) => (
          <Message
            key={index}
            message={item.content}
            role={item.role}
            isLoading={isLoading}
          />
        ))}
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
