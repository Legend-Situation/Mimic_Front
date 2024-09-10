import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Splash_Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.primary[6]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20%;
  position: fixed;
`;
