import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as _ from './style';
import MainHeader from 'components/Headers/MainHeader';
import ProfileLayout from 'components/common/ProfileLayout';
import LineInputLayout from 'components/common/LineInputLayout';
import ChatUpload from 'components/common/ChatUpload';
import ButtonLayout from 'components/common/ButtonLayout';
import TraitsInputLayout from 'components/common/InfoInputLayout';
import { initialState, reducer, State } from 'lib/utils/AddPartnerReducer';

const UserProfile = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({
    FileURL: '',
    Contents: [
      {
        user1: '',
        user2: ''
      }
    ]
  });

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

  const handleChatExit = () => {
    navigate('/chatList');
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
        <ButtonLayout
          value="채팅방 나가기"
          state={true}
          width="100%"
          backgroundColor="#ffffff"
          borderColor="#FF6B6B"
          textColor="#ff6b6b"
          onClick={handleChatExit}
        />
      </_.UserProfile_Layout>
    </>
  );
};

export default UserProfile;
