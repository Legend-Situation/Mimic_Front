import React from 'react';
import * as _ from './style';
import Plus from 'assets/icon/Plus';

const ChatUpload = () => {
  return (
    <_.ChatUpload_Frame>
    <_.ChatUpload_Layout>
      <_.ChatUpload_TextContainer>
        <_.ChatUpload_Title>더 정확한 대화를 하고 싶다면?</_.ChatUpload_Title>
        <_.ChatUpload_Description>
          대화 내용은 본인 외에 확인 할 수 없으니 안심하세요!
        </_.ChatUpload_Description>
      </_.ChatUpload_TextContainer>
      <_.ChatUpload_ButtonContainer>
        <_.ChatUpload_Button>
          <Plus color="#fff" width="20" height="20" />
          대화 내용 업로드
        </_.ChatUpload_Button>
      </_.ChatUpload_ButtonContainer>
    </_.ChatUpload_Layout>
      <_.ChatUpload_Info>
        카카오톡 대화방 → 설정 → 대화 내용 내보내기 → 모든 텍스트 내부 저장소에 저장 → txt 파일 업로드 (1:1 채팅만 가능)
      </_.ChatUpload_Info>
    </_.ChatUpload_Frame>
  );
};

export default ChatUpload;