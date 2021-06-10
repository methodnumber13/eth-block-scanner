import styled from '@emotion/styled';

import { heights, colors } from '../styles/variables';
import { memo } from 'react';
import { HeaderProps } from './types';

const StyledHeader = styled.header`
  height: ${heights.header}px;
  background-color: ${colors.gray.dark};
  color: ${colors.white};
`;

const HeaderInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: 22em;
`;

export const Header = memo<HeaderProps>(({ title }) => {
  return (
    <StyledHeader>
      <HeaderInner>{title}</HeaderInner>
    </StyledHeader>
  );
});
