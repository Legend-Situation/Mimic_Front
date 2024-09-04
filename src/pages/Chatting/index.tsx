import React, {
  useEffect,
  useRef,
  useState,
  ChangeEvent,
  KeyboardEvent
} from 'react';
import MainHeader from 'components/Headers/MainHeader';
import Message from 'components/Message';
import * as _ from './style';
import Send from 'assets/icon/Send';
import { theme } from 'lib/utils/style/theme';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Chat_Log, Chat_Send } from 'lib/api/Chat';
import { ChatLog } from 'types/chatLog';
import Profile from 'assets/image/Profile.png';
import { useNavigate, useParams } from 'react-router-dom';
import { Auth_UserState } from 'lib/api/Auth';

interface ChatMessage {
  role: string;
  content: { text: string }[];
}

const Chatting = (): JSX.Element => {
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>('');
  const [pendingMessage, setPendingMessage] = useState<ChatMessage | null>(
    null
  );
  const [isWaitingForReply, setIsWaitingForReply] = useState<boolean>(false);
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [chatLog, setChatLog] = useState<ChatLog>();
  const params = useParams<{ id: string }>().id;
  const chatHistories = chatLog?.data?.conversation?.messages || [];
  const queryClient = useQueryClient();

  // const { isError } = useQuery('getUserState', Auth_UserState, {
  //   refetchOnWindowFocus: false,
  //   retry: 0
  // });

  // useEffect(() => {
  //   if (isError) {
  //     navigate('/login');
  //   }
  // });

  const { mutate: sendMessageMutate } = useMutation(Chat_Send, {
    onMutate: async (newMessage: { previousConversation: string }) => {
      setPendingMessage({
        role: 'user',
        content: [{ text: newMessage.previousConversation }]
      });
      setIsWaitingForReply(true);
      return Promise.resolve();
    },
    onSuccess: (res: any) => {
      if (res) {
        setPendingMessage(null);
        setChatLog((prevChatLog: any) => {
          const updatedMessages = [
            ...(prevChatLog?.data?.conversation?.messages || []),
            res.data
          ];
          return {
            ...prevChatLog,
            data: {
              ...prevChatLog?.data,
              conversation: {
                ...prevChatLog?.data?.conversation,
                messages: updatedMessages
              }
            }
          };
        });
        queryClient.invalidateQueries('getChatLog');
        setIsWaitingForReply(false);
      }
      if (textareaRef.current) textareaRef.current.focus();
      if (messageEndRef.current) {
        messageEndRef.current.scrollIntoView({ behavior: 'auto' });
      }
    },
    onError: () => {
      alert('메시지 전송에 실패하였습니다.');
      setPendingMessage(null);
      setIsWaitingForReply(false);
    }
  });

  useQuery<ChatLog>(
    'getChatLog',
    async () => {
      if (params) {
        return await Chat_Log(params);
      }
      throw new Error('Chat parameter is missing');
    },
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      retry: 0,
      onError: (err: any) => console.log(err),
      onSuccess: (res: ChatLog) => {
        setChatLog((prev) => ({
          ...prev,
          ...res
        }));
        setTimeout(() => {
          if (messageEndRef.current) {
            messageEndRef.current.scrollIntoView({ behavior: 'auto' });
          }
        }, 0);
      }
    }
  );

  const handleSendMessage = () => {
    if (message.trim() !== '' && params && !isWaitingForReply) {
      sendMessageMutate({
        chatid: params,
        previousConversation: message
      });
      setMessage('');
    }
  };

  const resizeHeight = (
    textarea: React.RefObject<HTMLTextAreaElement>,
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (textarea.current) {
      textarea.current.style.height = 'auto';
      textarea.current.style.height = `${textarea.current.scrollHeight}px`;
      setMessage(e.target.value);
    }
  };

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'auto' });
    }
  }, [chatHistories, pendingMessage]);

  useEffect(() => {
    setTimeout(() => {
      if (messageEndRef.current) {
        messageEndRef.current.scrollIntoView({ behavior: 'auto' });
      }
    }, 0);
  }, []);

  return (
    <_.Chatting_Layout>
      <MainHeader
        title={chatLog?.data?.name}
        propertyIcon={true}
        chatid={params}
      />
      <_.Chatting_Messages>
        {chatHistories
          ?.filter(
            (item: any) => item && item.role !== 'system' && item.content
          )
          .map((item: any, index: number) => {
            const messageText = item.content
              .map((contentItem: any) => contentItem?.text)
              .join(' ');
            return (
              <Message
                key={index}
                profileImg={chatLog?.data?.profileImg || Profile}
                name={chatLog?.data?.name ?? '사용자'}
                message={messageText}
                role={item.role}
                isLoading={false}
              />
            );
          })}
        {pendingMessage && (
          <Message
            profileImg={chatLog?.data?.profileImg || Profile}
            name={chatLog?.data?.name ?? '사용자'}
            message={pendingMessage.content[0].text}
            role={pendingMessage.role}
            isLoading={false}
          />
        )}
        {isWaitingForReply && (
          <Message
            profileImg={chatLog?.data?.profileImg || Profile}
            name={chatLog?.data?.name ?? '사용자'}
            message=""
            role="assistant"
            isLoading={true}
          />
        )}
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
            disabled={isWaitingForReply}
          />
          <_.Chatting_SendIcon
            onClick={handleSendMessage}
            disabled={isWaitingForReply}
          >
            <Send stroke={message ? theme.primary[6] : theme.gray[200]} />
          </_.Chatting_SendIcon>
        </_.Chatting_Typing_Box>
      </_.Chatting_Typing_Container>
    </_.Chatting_Layout>
  );
};

export default Chatting;
