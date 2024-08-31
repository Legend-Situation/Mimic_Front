import React, { useState } from 'react';
import * as _ from './style';
import MainHeader from 'components/Headers/MainHeader';
import ProfileLayout_Layout from 'components/common/ProfileLayout';
import LineInputLayout from 'components/common/LineInputLayout';
import ChatUpload from 'components/common/ChatUpload';
import ButtonLayout from 'components/common/ButtonLayout';

const UserProfile = () => {
  const [name, setName] = useState('사용자이름');
  const [age, setAge] = useState('18');
  const [description, setDescription] = useState('애는 내 남친이야 나랑 사귀어 잘생긴 훈남 st ㅋㅋ 공부도 잘 하고 나를 귀여밍이라고 불러줌');

  return (
    <_.UserProfile_Layout>
      <MainHeader title="프로필" propertyIcon={false} control="편집" />
      <_.UserProfile_Container>
        <ProfileLayout_Layout edit={false} />
        <LineInputLayout 
          label="이름" 
          placeholder="사용자이름" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <LineInputLayout 
          label="나이" 
          placeholder="18" 
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
        />
        <_.UserProfile_TextAreaBox>
          <_.UserProfile_Label>특징</_.UserProfile_Label>
          <_.UserProfile_TextArea
            placeholder="특징을 입력하세요"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </_.UserProfile_TextAreaBox>
        <ChatUpload />
        <ButtonLayout
          value="채팅방 나가기"
          state={true}
          width="100%"
          backgroundColor="#ffffff"
          borderColor="#FF6B6B"
          textColor="#ff6b6b"
        />
      </_.UserProfile_Container>
    </_.UserProfile_Layout>
  );
};

export default UserProfile;