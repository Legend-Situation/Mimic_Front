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

interface SendParams {
  chatid: string;
  previousConversation: string;
}

export const Chat_Send = async (params: SendParams) => {
  const { data } = await AuthInstance.post(`/chat/chatting/${params.chatid}`, {
    previousConversation: params.previousConversation
  });
  return data;
};

export const Chat_Delete = async (chatid: string) => {
  const { data } = await AuthInstance.delete(`/chat/chatting/${chatid}`);
  return data;
};

export const Chat_Get = async (chatid: string) => {
  const { data } = await AuthInstance.get(`/chat/chatuser/${chatid}`);
  return data;
};

interface UpdateParams {
  chatid: string;
  name: string;
  profileImg: string;
  info: string;
  age: string;
}

export const Chat_Update = async (params: UpdateParams) => {
  const { data } = await AuthInstance.put(`/chat/chatting/${params.chatid}`, {
    name: params.name,
    profileImg: params.profileImg,
    info: params.info,
    age: params.age
  });
  return data;
};
