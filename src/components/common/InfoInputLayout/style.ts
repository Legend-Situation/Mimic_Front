import styled from 'styled-components';
import { theme } from 'lib/utils/style/theme';

export const InfoInputLayout_Container = styled.div`
  width: 100%;
`;

export const InfoInputLayout_Input = styled.textarea<{
  isEditing: boolean;
}>`
  background-color: #fff;
  display: flex;
  height: 160px;
  padding: 15px 16px;
  border-radius: 8px;
  border: 1px solid ${theme.gray[100]};
  color: ${({ disabled }) => (disabled ? theme.gray[500] : theme.gray.black)};
  font-size: 15px;
  font-weight: 500;
  resize: none;
  max-width: 100%;
  max-height: 150px;
  width: 100%;
  height: 150px;

  &:focus {
    border-color: ${({ isEditing }) =>
      isEditing ? theme.primary[6] : theme.gray[100]};
    outline: none;
  }

  &::placeholder {
    color: ${theme.gray[300]};
  }
`;

export const InfoInputLayout_CharCount = styled.div`
  text-align: right;
  color: ${theme.gray[200]};
  font-size: 13px;
  margin-top: 5px;
`;
