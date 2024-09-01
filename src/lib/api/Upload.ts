import { AuthInstance } from './customAxios';

export const Upload_Image = async (formData: FormData) => {
  const { data } = await AuthInstance.post(`/upload/image`, formData);
  return data;
};
