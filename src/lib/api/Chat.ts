import { AuthInstance, DefaultInstance } from './customAxios';

export const Chat_List = async () => {
  const { data } = await AuthInstance.get(`/chat`);
  return data;
};

interface CreateParams {
  name: string;
  profileImg: string;
  info: string;
  chatUrl: string;
  previousConversationTarget: string;
  age: string;
  gender: string;
}

export const Chat_Create = async (params: CreateParams) => {
  const { data } = await AuthInstance.post(`/chat`, params);
  return data;
};

export const Chat_Log = async (chatid: string) => {
  const { data } = await AuthInstance.get(`/chat/chatting/${chatid}`);
  return data;
};
