import { memo } from 'react';
import { Routes } from './pages';
import { BrowserRouter as Router } from 'react-router-dom';
import { BlockState, ModalState } from './context';
import { IndexLayout, Modal } from './components';
import { HelmetProvider } from 'react-helmet-async';

import 'bootstrap/dist/css/bootstrap.min.css';

const helmetContext = {};

const App = memo(() => {
  const { BlockProvider } = BlockState;
  const { ModalProvider } = ModalState;
  return (
    <HelmetProvider context={helmetContext}>
      <IndexLayout>
        <ModalProvider>
          <BlockProvider>
            <Modal />
            <Router>
              <Routes />
            </Router>
          </BlockProvider>
        </ModalProvider>
      </IndexLayout>
    </HelmetProvider>
  );
});

export default App;
