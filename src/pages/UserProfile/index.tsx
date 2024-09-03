import React, { useReducer, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as _ from './style';
import MainHeader from 'components/Headers/MainHeader';
import ProfileLayout from 'components/common/ProfileLayout';
import LineInputLayout from 'components/common/LineInputLayout';
import ButtonLayout from 'components/common/ButtonLayout';
import TraitsInputLayout from 'components/common/InfoInputLayout';
import { initialState, reducer, State } from 'lib/utils/AddPartnerReducer';
import { useMutation } from 'react-query';
import { Chat_Delete } from 'lib/api/Chat';

const UserProfile = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isEditing, setIsEditing] = useState(false);
  const params = useParams().id;

  const navigate = useNavigate();

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({
      type: 'SET_INPUT_VALUE',
      payload: { name: name as keyof State, value }
    });
  };

  const handleTraitsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({
      type: 'SET_INPUT_VALUE',
      payload: { name: 'info', value: e.target.value }
    });
  };

  const handleControlClick = () => {
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
          profileImage={state.profileImg}
          setImageUrl={setImageUrl}
        />
        <LineInputLayout
          label="이름"
          placeholder="사용자이름"
          value={state.name}
          onChange={handleInputValue}
          isEditing={isEditing}
        />
        <LineInputLayout
          label="나이"
          placeholder="18"
          value={state.age}
          onChange={handleInputValue}
          isEditing={isEditing}
        />
        <_.UserProfile_TextAreaBox>
          <_.UserProfile_Label>특징</_.UserProfile_Label>
          <TraitsInputLayout
            info={state.info}
            onInfoChange={handleTraitsChange}
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
