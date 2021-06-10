import { Helmet } from 'react-helmet-async';
import { Header } from '../head';
import { LayoutRoot } from './root';
import { LayoutMain } from './main';
import '../../styles/normalize';
import { BasicComponentProps } from '../types';

export const IndexLayout = ({ children }: BasicComponentProps) => {
  return (
    <LayoutRoot>
      <Helmet
        title={'opera assigment'}
        meta={[
          { name: 'description', content: `It's an assigment` },
          { name: 'keywords', content: 'opera' },
        ]}
      />
      <Header title={'Eth Block scanner'} />
      <LayoutMain>{children}</LayoutMain>
    </LayoutRoot>
  );
};
