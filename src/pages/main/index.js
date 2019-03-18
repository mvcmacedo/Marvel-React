import React, { Fragment } from 'react';

import { Container } from './styles';

import Comics from '../../components/comics';
import Input from '../../components/input';

const main = () => (
  <Fragment>
    <Container>
      <img src={process.env.REACT_APP_LOGO} alt="marvel-logo" />
      <Input />
    </Container>
    <Comics />
  </Fragment>
);

export default main;
