import styled from 'styled-components';
import { theme } from 'lib/utils/style/theme';

export const AddPartner_Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const AddPartner_Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`;

export const AddPartner_sectionGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const AddPartner_Box = styled.div`
  width: 100%;
  gap: 8px;
`;

export const AddPartner_Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  color: ${theme.gray.black};

  &::after {
    content: ' *';
    color: ${theme.sub.red};
  }
`;

export const AddPartner_GenderGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 7px;
`;

export const AddPartner_TraitsInput = styled.textarea`
  display: flex;
  height: 160px;
  padding: 15px 16px;
  border-radius: 8px;
  border: 1px solid ${theme.gray[100]};
  color: ${theme.gray.black};
  font-size: 15px;
  font-weight: 500;
  resize: none;
  max-width: 100%;
  max-height: 150px;
  width: 100%;
  height: 150px;
  &:focus {
    border-color: ${theme.primary[6]};
    outline: none;
  }
  &::placeholder {
    color: ${theme.gray[300]};
  }
`;

export const AddPartner_CharCount = styled.div`
  text-align: right;
  color: ${theme.gray[200]};
  font-size: 13px;
  margin-top: 5px;
`;

export const AddPartner_UploadLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  color: ${theme.gray.black};
`;