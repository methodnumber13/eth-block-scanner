import { findByTestId, render } from '@testing-library/react';
import { Transaction } from '../../../context/block/types';
import { TBody } from '../body';

const transactions: Transaction[] = [
  {
    hash: 'hash',
    value: 'value',
    v: '01',
    gas: '023',
    blockHash: '4040xx3',
    blockNumber: '0x15',
    from: '0143x3',
    gasPrice: '100',
    input: '0003x4',
    nonce: 's',
    r: 'none',
    s: 'none',
    to: '0xf3',
    transactionIndex: '013099',
    type: '3000xx31',
  },
];

describe('<Table />', () => {
  it('shoud render TBody', async () => {
    const { container } = render(<TBody transactions={transactions} />);

    const el = await findByTestId(container, 'tbody-test-id');

    expect(el).toBeTruthy();
  });
});
