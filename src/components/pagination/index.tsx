import { ReactNode, memo } from 'react';
import { css } from '@emotion/css';
import { PageList } from './page-list';
import { PaginationProps } from './types';

const paginationMain = css`
  --button-cursor: pointer;
  margin: 1em 0 0 0;
  cursor: var(--button-cursor);
  display: flex;
  flex-direction: row;
`;

const styles = css`
  --pagination-position: flex-end;
  display: flex;
  justify-content: var(--pagination-position);
  flex-direction: row;
`;

interface PaginationWrapperProps {
  children: ReactNode;
}

export const PaginationWrapper = memo<PaginationWrapperProps>(
  ({ children }) => <div className={styles}>{children}</div>
);

export const Pagination = (props: PaginationProps) => {
  return (
    <PaginationWrapper>
      <div className={paginationMain} data-testid={props.pageSize}>
        <PageList {...props} />
      </div>
    </PaginationWrapper>
  );
};
