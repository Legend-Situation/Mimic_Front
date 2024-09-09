import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Chat_Link = styled(Link)`
  text-decoration: none;
`;

export const Chat_Layout = styled.div`
  width: 100%;
  padding: 16px 22px;
  display: flex;
  gap: 12px;
  position: relative;
  align-items: center;
`;

export const Chat_Image = styled.img`
  width: 100%;
  max-width: 48px;
  height: 48px;
  border-radius: 20px;
  object-fit: cover;
`;

export const Chat_Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Chat_Name = styled.p`
  color: ${theme.gray.black};
  font-size: 17px;
  font-weight: 400;
`;

export const Chat_Content = styled.p`
  color: ${theme.gray.black};
  font-size: 15px;
  font-weight: 400;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const Chat_Time = styled.p`
  color: ${theme.gray[300]};
  font-size: 14px;
  font-weight: 400;
  position: absolute;
  top: 16px;
  right: 22px;
`;

export const Chat_Count = styled.p`
  position: absolute;
  top: 47px;
  right: 22px;
  background-color: ${theme.sub.red};
  padding: 1px 4px;
  border-radius: 150px;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
`;
