import { AuthInstance, DefaultInstance } from './customAxios';

export const Chat_List = async () => {
  const { data } = await AuthInstance.get(`/chat`);
  return data;
};
