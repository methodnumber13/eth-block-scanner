import { useState, useContext, useMemo, useEffect, useCallback } from 'react';
import { BlockContext } from '../context/block';
import { Transaction } from '../context/block/types';

export const usePagination = () => {
  const MAX_PAGE_ITEMS = 20;
  const [count, setCountState] = useState(0);

  const [pageData, setPageData] = useState<Transaction[]>([]);

  const setCount = useCallback(
    (num: number) => {
      setCountState(num);
    },
    [setCountState]
  );

  const {
    state: { transactions },
  } = useContext(BlockContext);

  const sliced = useMemo(
    () =>
      [...transactions].slice(
        MAX_PAGE_ITEMS * count,
        MAX_PAGE_ITEMS * (count + 1)
      ),
    [count, transactions]
  );
  const pageSize = useMemo(
    () =>
      transactions.length
        ? parseInt(String(transactions.length / MAX_PAGE_ITEMS))
        : 0,
    [transactions]
  );

  useEffect(() => {
    setPageData(sliced);
  }, [sliced]);

  return { pageSize, pageData, count, setCount };
};
