import styled from 'styled-components';
import { theme } from 'lib/utils/style/theme';

export const LineInputLayout_Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
  `;

export const LineInputLayout_Label = styled.label`
  font-size: 14px;
  color: ${theme.gray[300]};
  `;

export const LineInputLayout_Input = styled.input<{ disabled?: boolean }>`
  font-size: 15px;
  background-color: #fff;
  color: ${theme.gray.black};
  border: none;
  border-bottom: 1px solid ${theme.gray[100]};
  padding: 14px 10px;
  outline: none;
  color: ${({ disabled }) => (disabled ? theme.gray[500] : theme.gray.black)};
  
  &::placeholder {
    color: ${theme.gray[500]};
  }

  &:focus {
    border-bottom: 1px solid ${theme.primary[6]};
  }
`;