import { memo } from 'react';
import { Spinner as BootstrapSpinner } from 'react-bootstrap';
import styled from '@emotion/styled';

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: inherit;
`;

export const Spinner = memo<{ text?: string }>(({ text = 'Loading...' }) => (
  <SpinnerWrapper>
    <BootstrapSpinner animation="border" role="status"></BootstrapSpinner>
    <span className="sr-only">{text}</span>
  </SpinnerWrapper>
));
