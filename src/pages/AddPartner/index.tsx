import React, { useEffect, useReducer, useState } from 'react';
import * as _ from './style';
import MainHeader from 'components/Headers/MainHeader';
import ProfileLayout from 'components/common/ProfileLayout';
import InputLayout from 'components/common/InputLayout';
import GenderButton from 'components/common/GenderButton';
import ChatUpload from 'components/common/ChatUpload';
import ButtonLayout from 'components/common/ButtonLayout';
import InfoInputLayout from 'components/common/InfoInputLayout';
import { reducer, initialState, State } from 'lib/utils/AddPartnerReducer';
import { useMutation, useQuery } from 'react-query';
import { Chat_Create } from 'lib/api/Chat';
import { useNavigate } from 'react-router-dom';
import { Auth_UserState } from 'lib/api/Auth';
const AddPartner = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [data, setData] = useState({
    FileURL: '',
    Contents: [
      {
        user1: '',
        user2: ''
      }
    ]
  });

  const { isError } = useQuery('getUserState', Auth_UserState, {
    refetchOnWindowFocus: false,
    retry: 0
  });

  useEffect(() => {
    if (isError) {
      navigate('/login');
    }
  });

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

  const isFormValid = () => {
    const { name, info, age, gender, selectedPerson } = state;
    return (
      name == '' ||
      info == '' ||
      age == '' ||
      gender == '' ||
      data.FileURL == '' ||
      selectedPerson == ''
    );
  };
  
  const { mutate: CreateMutate } = useMutation(Chat_Create, {
    onSuccess: (res) => {
      alert(res.message);
      navigate('/');
    },
    onError: (err: any) => {
      console.log(err);
    }
  });

  const onSubmit = () => {
    console.log('Profile Image URL:', imageUrl);
    CreateMutate({
      name: state.name,
      profileImg: imageUrl,
      info: state.info,
      chatUrl: data.FileURL,
      previousConversationTarget: state.selectedPerson,
      age: state.age,
      gender: state.gender
    });
  };

  return (
    <>
      <MainHeader title="상대방 추가" />
      <_.AddPartner_Layout>
        <_.AddPartner_sectionGap>
          <ProfileLayout
            edit={true}
            profileImage={initialState.profileImg}
            setImageUrl={setImageUrl}
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
                state={state.gender === 'woman'}
                onClick={() => handleGenderSelect('woman')}
              />
              <GenderButton
                value="남자"
                state={state.gender === 'man'}
                onClick={() => handleGenderSelect('man')}
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
            data={data}
            setData={setData}
          />
        </_.AddPartner_Box>
        <ButtonLayout
          value="완료"
          width="100%"
          state={!isFormValid()}
          onClick={onSubmit}
        />
      </_.AddPartner_Layout>
    </>
  );
};

export default AddPartner;
