import { actionTypes } from './action-types';

export interface Transaction {
  blockHash: string;
  blockNumber: string;
  from: string;
  gas: string;
  gasPrice: string;
  hash: string;
  input: string;
  nonce: string;
  r: string;
  s: string;
  to: string;
  transactionIndex: string;
  type: string;
  v: string;
  value: string;
}

export interface BlockProps {
  number: string;
  hash: string;
  isLoading: boolean;
  isError: boolean;
  transactions: Transaction[];
  getBlock: (block: string) => void;
}

export type BlockState = Omit<BlockProps, 'getBlock'>;

export type BlockInfoProps = Pick<
  BlockState,
  'hash' | 'number' | 'transactions'
>;

export interface BlockSuccess {
  type: actionTypes.BLOCK_SUCCESS;
  payload: BlockInfoProps;
}

export interface FetchBlock {
  type: actionTypes.BLOCK_PENDING;
}

export interface BlockError {
  type: actionTypes.BLOCK_ERROR;
}

export type Action = FetchBlock | BlockSuccess | BlockError;
