import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import store from './store';
import GlobalStyle from './styles/global';
import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <GlobalStyle />
      <Routes />
      <ToastContainer autoClose={5000} />
    </Fragment>
  </Provider>
);

export default App;
