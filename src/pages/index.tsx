import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { lazy } from 'react';

const Home = lazy(() => import('./home'));

export const routes = [
  {
    component: Home,
    path: '/',
    exact: true,
  },
];

export const Routes = () => (
  <Suspense fallback={null}>
    <Switch>
      <Route key="/" exact={true} path="/" component={Home} />
    </Switch>
  </Suspense>
);
