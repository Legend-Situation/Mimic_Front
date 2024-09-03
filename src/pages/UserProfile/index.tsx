import React, { useEffect, useReducer, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as _ from './style';
import MainHeader from 'components/Headers/MainHeader';
import ProfileLayout from 'components/common/ProfileLayout';
import LineInputLayout from 'components/common/LineInputLayout';
import ButtonLayout from 'components/common/ButtonLayout';
import InfoInputLayout from 'components/common/InfoInputLayout';
import { initialState, reducer, State } from 'lib/utils/AddPartnerReducer';
import { useMutation, useQuery } from 'react-query';
import { Chat_Delete, Chat_Get, Chat_Update } from 'lib/api/Chat';
import { Auth_UserState } from 'lib/api/Auth';

const UserProfile = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isEditing, setIsEditing] = useState(false);
  const params = useParams().id;
  const navigate = useNavigate();

  const { isError } = useQuery('getUserState', Auth_UserState, {
    refetchOnWindowFocus: false,
    retry: 0
  });

  useEffect(() => {
    if (isError) {
      navigate('/login');
    }
  });

  const { data: userData } = useQuery(
    ['getUserData', params],
    () => {
      if (params) {
        return Chat_Get(params);
      }
    },
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      retry: 0,
      onError: (err: any) => {
        console.log(err);
      }
    }
  );

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

  const handleControlClick = () => {
    if (isEditing && params) {
      Chat_Update({
        chatid: params,
        name: state.name,
        profileImg: state.profileImg,
        info: state.info,
        age: state.age
      });
    }
    setIsEditing(!isEditing);
  };

  const { mutate: ChatDeleteMutate } = useMutation(Chat_Delete, {
    onSuccess: () => {
      navigate('/');
    },
    onError: (err) => {
      alert('채팅 삭제 실패');
      console.log(err);
    }
  });

  const handleChatExit = () => {
    const check = confirm('채팅을 삭제하시겠습니까?');
    if (params && check) {
      ChatDeleteMutate(params);
    }
  };

  useEffect(() => {
    if (userData) {
      dispatch({
        type: 'SET_INPUT_VALUE',
        payload: { name: 'name', value: userData.data.name }
      });
      dispatch({
        type: 'SET_INPUT_VALUE',
        payload: { name: 'profileImg', value: userData.data.profileImg }
      });
      dispatch({
        type: 'SET_INPUT_VALUE',
        payload: { name: 'age', value: userData.data.age }
      });
      dispatch({
        type: 'SET_INPUT_VALUE',
        payload: { name: 'info', value: userData.data.info }
      });
    }
  }, [userData]);

  return (
    <>
      <MainHeader
        title="프로필"
        propertyIcon={false}
        control="편집"
        isEditing={isEditing}
        onControlClick={handleControlClick}
      />
      <_.UserProfile_Layout>
        <ProfileLayout
          edit={isEditing}
          profileImage={initialState.profileImg}
          setImageUrl={setImageUrl}
        />
        <LineInputLayout
          name="name"
          label="이름"
          placeholder="사용자이름"
          value={state.name}
          onChange={handleInputValue}
          isEditing={isEditing}
        />
        <LineInputLayout
          name="age"
          label="나이"
          placeholder="18"
          value={state.age}
          onChange={handleInputValue}
          isEditing={isEditing}
        />
        <_.UserProfile_TextAreaBox>
          <_.UserProfile_Label>특징</_.UserProfile_Label>
          <InfoInputLayout
            info={state.info}
            onInfoChange={handleInfoChange}
            isEditing={isEditing}
          />
        </_.UserProfile_TextAreaBox>
        <_.UserProfile_Button>
          <ButtonLayout
            value="채팅방 나가기"
            state={true}
            width="100%"
            backgroundColor="#ffffff"
            borderColor="#FF6B6B"
            textColor="#ff6b6b"
            onClick={handleChatExit}
          />
        </_.UserProfile_Button>
      </_.UserProfile_Layout>
    </>
  );
};

export default UserProfile;
