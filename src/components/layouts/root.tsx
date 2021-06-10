import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import normalize from '../../styles/normalize';
import { BasicComponentProps } from '../types';

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const LayoutRoot = ({ children, className }: BasicComponentProps) => (
  <>
    <Global styles={() => css(normalize)} />
    <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
  </>
);
