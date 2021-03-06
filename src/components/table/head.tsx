import styled from '@emotion/styled';
import { BasicComponentProps } from '../types';

const ThContainer = styled.th`
  padding: 18px 28px 18px;
  text-align: center;
`;

const HeaderCell = ({ children }: BasicComponentProps) => (
  <ThContainer>{children}</ThContainer>
);

const headerTitles = ['From', 'To', 'Hash'];

export const THead = () => (
  <thead>
    <tr>
      {headerTitles.map((title) => (
        <HeaderCell key={`title-${title}`}>{title}</HeaderCell>
      ))}
    </tr>
  </thead>
);
