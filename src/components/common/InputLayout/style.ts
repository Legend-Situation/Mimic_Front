import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const InputLayout_Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputLayout_Input_Title = styled.label`
  color: ${theme.gray.black};
  font-size: 16px;
  font-weight: 500;
`;

export const InputLayout_Input_Title_Star = styled.span`
  color: ${theme.sub.red};
  margin-left: 4px;
`;

export const InputLayout_Box = styled.input`
  padding: 15px 16px;
  font-size: 15px;
  border-radius: 8px;
  border: 1px solid ${theme.gray[100]};
  outline: none;

  &:focus {
    border-color: ${theme.primary[6]};
  }

  &::placeholder {
    color: ${theme.gray[250]};
    font-size: 15px;
    font-weight: 500;
  }
`;
