import { memo } from 'react';
import { Info } from './info';
import { ErrorInfo } from './error-info';
import { useBlock } from '../../hooks';

const Home = memo(() => {
  const { isError } = useBlock();

  if (isError) return <ErrorInfo text="something went wrong..." />;
  return <Info />;
});

export default Home;
