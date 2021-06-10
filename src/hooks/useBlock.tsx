import { useCallback, useContext } from 'react';

import { BlockState } from '../context';
import { useLoadOnce } from './useLoadOnce';

export const useBlock = () => {
  const { BlockContext } = BlockState;
  const {
    state: { getBlock, isLoading, ...rest },
  } = useContext(BlockContext);

  const load = useCallback(
    (value?: string) => {
      getBlock(value || 'latest');
    },
    [getBlock]
  );

  const nextLoading = useLoadOnce({
    load,
    loading: isLoading,
    shouldLoadOnMount: true,
  });

  return { isLoading: nextLoading, getBlock, ...rest };
};
