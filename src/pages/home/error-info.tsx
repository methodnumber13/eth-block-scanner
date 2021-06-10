import styled from '@emotion/styled';

const ErrorBlock = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ErrorInfoProps {
  text: string;
}

export const ErrorInfo = ({ text }: ErrorInfoProps) => (
  <ErrorBlock>{text}</ErrorBlock>
);
