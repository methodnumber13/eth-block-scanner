import styled from '@emotion/styled';
import { BasicComponentProps } from '../types';

const StyledLayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #faf7f7;
  height: 65em;
`;

export const LayoutMain = ({ children, className }: BasicComponentProps) => (
  <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
);
