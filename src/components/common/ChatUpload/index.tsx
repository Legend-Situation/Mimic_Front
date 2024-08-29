import React, { useRef, useState } from 'react';
import * as _ from './style';
import Plus from 'assets/icon/Plus';
import Delete from 'assets/icon/Delete';
import Refresh from 'assets/icon/Refresh';

const ChatUpload = () => {
  const [isUploaded, setIsUploaded] = useState(false); // 업로드 상태 관리
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('파일 선택됨:', file.name);
      setIsUploaded(true);
    }
  };

  const handleDeleteClick = () => {
    setIsUploaded(false); // 업로드 상태 초기화
    if (fileInputRef.current) {
      fileInputRef.current.value = null; // 파일 입력 필드 값 초기화
    }
  };

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
            <_.ChatUpload_Button isUploaded={isUploaded} onClick={handleButtonClick}>
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
            카카오톡 대화방 → 설정 → 대화 내용 내보내기 → 모든 텍스트 내부 저장소에 저장 → txt 파일 업로드 (1:1 채팅만 가능)
          </_.ChatUpload_Info>
        )}
      </_.ChatUpload_Frame>

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </>
  );
};

export default ChatUpload;