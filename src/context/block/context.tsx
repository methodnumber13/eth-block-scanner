import { createContext, Dispatch } from 'react';
import { Action, BlockProps } from './types';

export const initialState: BlockProps = {
  number: '',
  hash: '',
  transactions: [],
  isLoading: false,
  isError: false,
  getBlock: (block: string) => Promise,
};

export const BlockContext = createContext<{
  state: BlockProps;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: () => undefined });
