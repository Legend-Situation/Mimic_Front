import React, { useReducer, useState } from 'react';
import * as _ from './style';
import MainHeader from 'components/Headers/MainHeader';
import ProfileLayout from 'components/common/ProfileLayout';
import InputLayout from 'components/common/InputLayout';
import GenderButton from 'components/common/GenderButton';
import ChatUpload from 'components/common/ChatUpload';
import ButtonLayout from 'components/common/ButtonLayout';
import Profile from 'assets/image/Profile.png';
import InfoInputLayout from 'components/common/InfoInputLayout';

interface State {
  name: string;
  age: string;
  info: string;
  gender: string;
  isUploaded: boolean;
  selectedPerson: string;
  profileImg: string;
}

type Action =
  | { type: 'SET_INPUT_VALUE'; payload: { name: keyof State; value: string } }
  | { type: 'SET_GENDER'; payload: string }
  | { type: 'SET_IS_UPLOADED'; payload: boolean }
  | { type: 'SET_SELECTED_PERSON'; payload: string }
  | { type: 'RESET_UPLOAD' };

const initialState: State = {
  name: '',
  age: '',
  info: '',
  gender: '',
  isUploaded: false,
  selectedPerson: '',
  profileImg: Profile
};

function reducer(state: State, action: Action): State {
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

const AddPartner = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [profileImg, setProfileImg] = useState<string>(Profile);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({
      type: 'SET_INPUT_VALUE',
      payload: { name: name as keyof State, value }
    });
  };

  const handleInfoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({
      type: 'SET_INPUT_VALUE',
      payload: { name: 'info', value: e.target.value }
    });
  };

  const handleGenderSelect = (gender: string) => {
    dispatch({ type: 'SET_GENDER', payload: gender });
  };

  const isButtonActive =
    state.name !== '' &&
    state.age !== '' &&
    state.gender !== '' &&
    state.info !== '';

  return (
    <>
      <MainHeader title="상대방 추가" />
      <_.AddPartner_Layout>
        <_.AddPartner_sectionGap>
          <ProfileLayout
            edit={true}
            image={profileImg}
            setImage={setProfileImg}
          />
          <InputLayout
            value={state.name}
            name="name"
            title="이름"
            placeholder="상대방의 이름을 입력하세요."
            onChange={handleInputValue}
          />
          <InputLayout
            value={state.age}
            name="age"
            title="나이"
            placeholder="상대방의 나이를 입력하세요."
            onChange={handleInputValue}
          />
          <_.AddPartner_Box>
            <_.AddPartner_Label>성별</_.AddPartner_Label>
            <_.AddPartner_GenderGroup>
              <GenderButton
                value="여자"
                state={state.gender === 'female'}
                onClick={() => handleGenderSelect('female')}
              />
              <GenderButton
                value="남자"
                state={state.gender === 'male'}
                onClick={() => handleGenderSelect('male')}
              />
            </_.AddPartner_GenderGroup>
          </_.AddPartner_Box>
          <_.AddPartner_Box>
            <_.AddPartner_Label>특징</_.AddPartner_Label>
            <InfoInputLayout
              info={state.info}
              onInfoChange={handleInfoChange}
            />
          </_.AddPartner_Box>
        </_.AddPartner_sectionGap>
        <_.AddPartner_Box>
          <_.AddPartner_UploadLabel>
            1:1 대화 내용 업로드
          </_.AddPartner_UploadLabel>
          <ChatUpload
            isUploaded={state.isUploaded}
            setIsUploaded={(isUploaded) =>
              dispatch({ type: 'SET_IS_UPLOADED', payload: isUploaded })
            }
            selectedPerson={state.selectedPerson}
            setSelectedPerson={(person) =>
              dispatch({ type: 'SET_SELECTED_PERSON', payload: person })
            }
          />
        </_.AddPartner_Box>
        <ButtonLayout value="완료" width="100%" state={isButtonActive} />
      </_.AddPartner_Layout>
    </>
  );
};

export default AddPartner;
