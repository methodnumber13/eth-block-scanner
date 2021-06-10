import { Table as BootstrapTable } from 'react-bootstrap';
import { THead } from './head';
import { TBody } from './body';
import { Pagination } from '../pagination';
import { usePagination } from '../../hooks';

export const Table = () => {
  const { pageData, pageSize, count, setCount } = usePagination();

  if (!pageData.length) return null;

  return (
    <>
      <BootstrapTable striped bordered hover variant="dark" size="sm">
        <THead />
        <TBody transactions={pageData} />
      </BootstrapTable>
      <Pagination count={count} pageSize={pageSize} setCount={setCount} />
    </>
  );
};
