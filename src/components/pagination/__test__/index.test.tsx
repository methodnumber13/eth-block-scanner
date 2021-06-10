import { findByTestId, render } from '@testing-library/react';
import { Pagination } from '../index';

describe('<Pagination />', () => {
  it('shoud render Pagination', async () => {
    const setCount = jest.fn();

    const { container } = render(
      <Pagination pageSize={10} count={0} setCount={setCount} />
    );

    const el = await findByTestId(container, 10);

    expect(el).toBeTruthy();
  });
});
