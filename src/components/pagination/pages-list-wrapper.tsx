import { ArrowButton } from '../buttons/arrow';
import { css, cx } from '@emotion/css';
import styled from '@emotion/styled';
import { memo, useMemo } from 'react';
import { PaginationProps } from './types';

const arrowBtn = css`
  border-radius: 0.4em;
  &:hover {
    border: 2px solid rgba(3, 3, 3, 0.76);
  }
`;

const PagesWrapperView = styled.div`
  display: flex;
  flex-direction: row;
`;

const btnDisabled = css`
  pointer-events: none;
  opacity: 0.2;
`;

export const PageListWrapper = memo<PaginationProps>(
  ({ children, count, pageSize, setCount }) => {
    const countValueLeft = useMemo(
      () => (count && count > 0 ? count - 1 : 0),
      [count]
    );
    const countValueRight = useMemo(
      () => (count && count < pageSize - 2 ? count + 1 : pageSize - 2),
      [count, pageSize]
    );

    const disabledLeft = useMemo(() => (!count ? btnDisabled : ''), [count]);
    const disabledRight = useMemo(
      () => (pageSize - 2 === count ? btnDisabled : ''),
      [count, pageSize]
    );

    return (
      <PagesWrapperView>
        <ArrowButton
          className={cx(arrowBtn, disabledLeft)}
          onClick={() => setCount(countValueLeft)}
          iconSize={'m'}
          direction="left"
        />
        {children}
        <ArrowButton
          className={cx(arrowBtn, disabledRight)}
          onClick={() => setCount(countValueRight)}
          iconSize={'m'}
          direction="right"
        />
      </PagesWrapperView>
    );
  }
);
