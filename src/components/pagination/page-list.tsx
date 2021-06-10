import { Button } from '../buttons';
import { PageListWrapper } from './pages-list-wrapper';
import { css, cx } from '@emotion/css';
import { PaginationProps } from './types';
import { useMemo } from 'react';
import { nanoid } from 'nanoid';

const paginationBtn = css`
  cursor: pointer;
  color: black;
  border-radius: 0.4em;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: white;
  text-decoration: none;
  &:hover {
    border: 2px solid rgba(3, 3, 3, 0.76);
  }
`;

const sizeS = css`
  height: 2em;
  width: 2em;
`;

const pageActiveBtn = css`
  border: 2px solid rgba(12, 10, 10, 0.658);
`;

export const PageList = function (props: PaginationProps) {
  const { pageSize, count, setCount } = props;

  const memoizedPagin = useMemo(() => {
    const setActive = (i: number) => (count === i ? pageActiveBtn : '');

    if (!pageSize) return null;

    return new Array(pageSize - 1).fill(pageSize).map((page, i) => (
      <Button
        data-testid={`page-list-button ${i}`}
        key={nanoid()}
        onClick={() => setCount(i)}
        className={cx(paginationBtn, sizeS, setActive(i))}
      >
        {i + 1}
      </Button>
    ));
  }, [setCount, pageSize, count]);

  if (!pageSize) return null;

  return <PageListWrapper {...props}>{memoizedPagin}</PageListWrapper>;
};
