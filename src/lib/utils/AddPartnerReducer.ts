import Profile from 'assets/image/Profile.png';

export interface State {
  name: string;
  profileImg: string;
  info: string;
  chatUrl: string;
  previousConversationTarget: string;
  age: string;
  gender: string;
  isUploaded: boolean;
  selectedPerson: string;
}

export type Action =
  | { type: 'SET_INPUT_VALUE'; payload: { name: keyof State; value: string } }
  | { type: 'SET_GENDER'; payload: string }
  | { type: 'SET_IS_UPLOADED'; payload: boolean }
  | { type: 'SET_SELECTED_PERSON'; payload: string }
  | { type: 'RESET_UPLOAD' };

export const initialState: State = {
  name: '',
  profileImg: Profile,
  info: '',
  chatUrl: '',
  previousConversationTarget: '',
  age: '',
  gender: '',
  isUploaded: false,
  selectedPerson: ''
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_INPUT_VALUE':
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case 'SET_GENDER':
      return {
        ...state,
        gender: action.payload
      };
    case 'SET_IS_UPLOADED':
      return {
        ...state,
        isUploaded: action.payload
      };
    case 'SET_SELECTED_PERSON':
      return {
        ...state,
        selectedPerson: action.payload
      };
    case 'RESET_UPLOAD':
      return {
        ...state,
        isUploaded: false,
        selectedPerson: ''
      };
    default:
      return state;
  }
}
