import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Message_Layout = styled.div<{ role?: string }>`
  display: flex;
  gap: 8px;
  align-self: ${(props) =>
    props.role == 'assistant' ? 'self-start' : 'self-end'};
`;

export const Message_Image = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 52.8px;
  object-fit: cover;
`;

export const Message_Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Message_Name = styled.p`
  color: ${theme.gray.black};
  font-size: 15px;
  font-weight: 400;
`;

export const Message_Box = styled.div<{ role?: string }>`
  display: flex;
  width: max-content;
  max-width: 250px;
  padding: 10px 18px;
  color: ${theme.gray.black};
  font-size: 17px;
  font-weight: 400;
  border-radius: 20px 20px
    ${(props) => (props.role == 'assistant' ? '20px 5px' : '5px 20px')};
  background-color: ${(props) =>
    props.role == 'assistant' ? '#f2f3f7' : theme.primary[6]};
  color: ${(props) =>
    props.role == 'assistant' ? theme.gray.black : theme.gray[50]};
  margin-bottom: 10px;
`;
