import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const ButtonLayout_Container = styled.div<{ width: string }>`
  width: ${({ width }) => width};
`;

export const ButtonLayout_Button = styled.button<{
  width: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
}>`
  width: ${({ width }) => width};
  height: 50px;
  background-color: ${({ backgroundColor }) => backgroundColor || theme.primary[6]};
  color: ${({ textColor }) => textColor || theme.gray.white};
  border-radius: 10px;
  font-size: 16px;
  border: 2px solid ${({ borderColor }) => borderColor || 'transparent'};

  &:disabled {
    background-color: ${theme.gray[200]};
    cursor: not-allowed;
    color: ${theme.gray[400]};
  }
`;