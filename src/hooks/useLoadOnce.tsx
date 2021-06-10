import { useEffect } from 'react';
import { usePreviousDistinct } from 'react-use';

export interface UseLoadOnceParameters {
  shouldLoadOnMount?: boolean;
  loading: boolean;
  load: () => void;
  clear?: () => void;
}

export function useLoadOnce({
  shouldLoadOnMount = false,
  loading,
  load,
  clear,
}: UseLoadOnceParameters): boolean {
  const prevLoading = usePreviousDistinct(loading);
  const shouldLoad = !loading && shouldLoadOnMount && !prevLoading;

  useEffect(() => {
    if (shouldLoad) {
      load();
    }
  }, [load, shouldLoad]);

  useEffect(() => {
    return clear;
  }, [load, clear]);

  return loading || shouldLoad;
}
