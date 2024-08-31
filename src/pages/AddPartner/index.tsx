import React, { useState } from 'react';
import * as _ from './style';
import MainHeader from 'components/Headers/MainHeader';
import ProfileLayout from 'components/common/ProfileLayout';
import InputLayout from 'components/common/InputLayout';
import GenderButton from 'components/common/GenderButton';
import ChatUpload from 'components/common/ChatUpload';
import ButtonLayout from 'components/common/ButtonLayout';
import TraitsInputLayout from 'components/common/TraitsInputLayout'; 

const AddPartner = () => {
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
    name: '',
    age: '',
    gender: '',
    traits: ''
  });

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleTraitsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setInputs({
      ...inputs,
      traits: value
    });
  };

  const handleGenderSelect = (gender: string) => {
    setInputs({
      ...inputs,
      gender
    });
  };

  const isButtonActive =
    inputs.name !== '' &&
    inputs.age !== '' &&
    inputs.gender !== '' &&
    inputs.traits !== '';

  return (
    <_.AddPartner_Layout>
      <MainHeader title="상대방 추가" />
      <_.AddPartner_Container>
        <_.AddPartner_sectionGap>
          <ProfileLayout edit={true} />
          <InputLayout
            value={inputs.name}
            name="name"
            title="이름"
            placeholder="상대방의 이름을 입력하세요."
            onChange={handleInputValue}
          />
          <InputLayout
            value={inputs.age}
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
                state={inputs.gender === 'female'}
                onClick={() => handleGenderSelect('female')}
              />
              <GenderButton
                value="남자"
                state={inputs.gender === 'male'}
                onClick={() => handleGenderSelect('male')}
              />
            </_.AddPartner_GenderGroup>
          </_.AddPartner_Box>
          <_.AddPartner_Box>
          <_.AddPartner_Label>특징
            </_.AddPartner_Label>
          <TraitsInputLayout 
            traits={inputs.traits} 
            onTraitsChange={handleTraitsChange} 
            />
            </_.AddPartner_Box>
        </_.AddPartner_sectionGap>
        <_.AddPartner_Box>
          <_.AddPartner_UploadLabel>
            1:1 대화 내용 업로드
          </_.AddPartner_UploadLabel>
          <ChatUpload />
        </_.AddPartner_Box>
        <ButtonLayout value="완료" width="100%" state={isButtonActive} />
      </_.AddPartner_Container>
    </_.AddPartner_Layout>
  );
};

export default AddPartner;