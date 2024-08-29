import { ChatLog } from 'types/chatLog';

export const chatLog: ChatLog = {
  status: 200,
  success: true,
  message: '채팅을 찾았습니다.',
  data: {
    chatid: 1,
    name: '조윤서',
    profileImg: 'https://example.com/profile.jpg',
    info: '키가크다, 착하다',
    conversation: {
      model: 'gpt-4o',
      top_p: 1,
      messages: [
        {
          role: 'system',
          content: '너는 지금부터 내 대화상대가 되어야해.'
        },
        {
          role: 'user',
          content: '머하누 게이야'
        },
        {
          role: 'assistant',
          content: 'ㄴㄴ 그냥 코드나 좀 봐봐 ㅋㅋㅋ'
        },
        {
          role: 'user',
          content: '머하누 게이야'
        },
        {
          role: 'assistant',
          content: 'ㄴㄴ 그냥 코드나 좀 봐봐 ㅋㅋㅋ'
        }
      ],
      max_tokens: 256,
      temperature: 1,
      response_format: {
        type: 'text'
      },
      presence_penalty: 0,
      frequency_penalty: 0
    },
    chatUrl:
      'http://59.28.151.212:8774/chat/1724896008833.11728173496390104.txt',
    userid: 'test123',
    createdAt: '2024-08-29T01:47:08.000Z',
    updatedAt: '2024-08-29T01:47:32.000Z',
    deletedAt: null
  }
};

export default chatLog;
