interface Message {
  role: string;
  content: string;
  refusal?: string | null | undefined;
}

interface Conversation {
  model: string;
  top_p: number;
  messages: Message[];
  max_tokens: number;
  temperature: number;
  response_format: {
    type: string;
  };
  presence_penalty: number;
  frequency_penalty: number;
}

interface ChatData {
  chatid: string;
  name: string;
  profileImg: string;
  info: string;
  conversation: Conversation;
  chatUrl: string;
  previousConversationTarget?: string;
  userid: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
}

export interface ChatLog {
  status: number;
  success: boolean;
  message: string;
  data: ChatData;
}
