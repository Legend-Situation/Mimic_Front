import React, { useRef, ChangeEvent, useState } from 'react';
import * as _ from './style';
import Plus from 'assets/icon/Plus';
import Delete from 'assets/icon/Delete';
import Refresh from 'assets/icon/Refresh';
import Down from 'assets/icon/Down';
import { useMutation } from 'react-query';
import { Upload_Chat } from 'lib/api/Upload';
import Loading from 'assets/image/Loading.gif';

interface ChatUploadProps {
  isUploaded: boolean;
  setIsUploaded: (isUploaded: boolean) => void;
  selectedPerson: string;
  setSelectedPerson: (person: string) => void;
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
}

function ChatUpload({
  isUploaded,
  setIsUploaded,
  selectedPerson,
  setSelectedPerson,
  data,
  setData
}: ChatUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const { isLoading: ChatUploadLoading, mutate: ChatUploadMutate } =
    useMutation(Upload_Chat, {
      onSuccess: (res) => {
        setData(res.data);
      }
    });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      if (fileExtension === 'csv') {
        setIsUploaded(true);
        ChatUploadMutate(formData);
      } else {
        alert('CSV 파일만 업로드할 수 있습니다.');
        setIsUploaded(false);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }
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
    const selectedName = e.target.value;
    setSelectedPerson(selectedName);
  };

  return (
    <>
      <_.ChatUpload_Frame>
        {ChatUploadLoading ? (
          <_.ChatUpload_Loading_Layout>
            <_.ChatUpload_Loading src={Loading} alt="로딩" />
          </_.ChatUpload_Loading_Layout>
        ) : (
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
                  : '업로드할 파일을 선택해 주세요'}
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
        )}

        {!isUploaded && (
          <_.ChatUpload_Info>
            카카오톡 대화방 → 설정 → 대화 내용 내보내기 → 모든 텍스트 내부
            저장소에 저장 → csv 파일 업로드 (1:1 채팅만 가능)
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
                {data.Contents.map((person: any, index: number) => (
                  <>
                    <_.ChatUpload_Option
                      key={`${index}_user1`}
                      value={person.user1}
                    >
                      {person.user1}
                    </_.ChatUpload_Option>
                    <_.ChatUpload_Option
                      key={`${index}_user2`}
                      value={person.user2}
                    >
                      {person.user2}
                    </_.ChatUpload_Option>
                  </>
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
