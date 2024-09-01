import React, { useRef, ChangeEvent } from 'react';
import * as _ from './style';
import Plus from 'assets/icon/Plus';
import Delete from 'assets/icon/Delete';
import Refresh from 'assets/icon/Refresh';
import Down from 'assets/icon/Down';

interface ChatUploadProps {
  isUploaded: boolean;
  setIsUploaded: (isUploaded: boolean) => void;
  selectedPerson: string;
  setSelectedPerson: (person: string) => void;
}

function ChatUpload({
  isUploaded,
  setIsUploaded,
  selectedPerson,
  setSelectedPerson
}: ChatUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log('파일 선택됨:', file.name);
      setIsUploaded(true);
    }
  };

  const handleDeleteClick = () => {
    setIsUploaded(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setSelectedPerson('');
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPerson(e.target.value);
  };

  const dummyData = [
    { value: '강민지', label: '강민지' },
    { value: '추성우', label: '추성우' }
  ];

  return (
    <>
      <_.ChatUpload_Frame>
        <_.ChatUpload_Layout isUploaded={isUploaded}>
          {isUploaded && (
            <_.ChatUpload_Delete onClick={handleDeleteClick}>
              <Delete />
            </_.ChatUpload_Delete>
          )}
          <_.ChatUpload_TextContainer>
            <_.ChatUpload_Title isUploaded={isUploaded}>
              {isUploaded
                ? '성공적으로 업로드 되었어요 🌿'
                : '더 정확한 대화를 하고 싶다면?'}
            </_.ChatUpload_Title>
            <_.ChatUpload_Description isUploaded={isUploaded}>
              대화 내용은 본인 외에 확인 할 수 없으니 안심하세요!
            </_.ChatUpload_Description>
          </_.ChatUpload_TextContainer>
          <_.ChatUpload_ButtonContainer>
            <_.ChatUpload_Button
              isUploaded={isUploaded}
              onClick={handleButtonClick}
            >
              {isUploaded ? (
                <>
                  <Refresh />
                  대화 내용 재업로드
                </>
              ) : (
                <>
                  <Plus color="#fff" width="20" height="20" />
                  대화 내용 업로드
                </>
              )}
            </_.ChatUpload_Button>
          </_.ChatUpload_ButtonContainer>
        </_.ChatUpload_Layout>

        {!isUploaded && (
          <_.ChatUpload_Info>
            카카오톡 대화방 → 설정 → 대화 내용 내보내기 → 모든 텍스트 내부
            저장소에 저장 → txt 파일 업로드 (1:1 채팅만 가능)
          </_.ChatUpload_Info>
        )}

        {isUploaded && (
          <_.ChatUpload_DropdownContainer>
            <_.ChatUpload_DropdownWrapper>
              <_.ChatUpload_Dropdown
                id="person-select"
                value={selectedPerson}
                onChange={handleSelectChange}
              >
                <_.ChatUpload_Option value="">
                  상대방의 카카오톡 이름을 선택해주세요.
                </_.ChatUpload_Option>
                {dummyData.map((person) => (
                  <_.ChatUpload_Option key={person.value} value={person.value}>
                    {person.label}
                  </_.ChatUpload_Option>
                ))}
              </_.ChatUpload_Dropdown>
              <_.ChatUpload_Arrow>
                <Down />
              </_.ChatUpload_Arrow>
            </_.ChatUpload_DropdownWrapper>
          </_.ChatUpload_DropdownContainer>
        )}
      </_.ChatUpload_Frame>
      <_.ChatUpload_HiddenFileInput
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </>
  );
}

export default ChatUpload;
