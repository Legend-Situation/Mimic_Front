import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const ProfileLayout_Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

export const ProfileLayout_Container = styled.div`
  width: 5.625rem;
  height: 5.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ProfileLayout_Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid ${theme.gray[100]};
`;

export const ProfileLayout_ProfileEdit = styled.div<{ show: boolean }>`
  position: absolute;
  bottom: -1px;
  right: -4px;
  display: ${({ show }) => (show ? 'block' : 'none')};
  cursor: pointer;
`;

export const ProfileLayout_ProfileInput = styled.input`
  display: none; 
`;