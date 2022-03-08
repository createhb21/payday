import React from 'react';

import Layout from '../Layout';
import {
  Intro,
  Question,
  Features,
  Stairs,
  Counselor,
  AppStore,
  IsLack,
} from './components';

const Home = () => {
  return (
    <Layout>
      <Intro />
      <Question />
      <Features />
      <Stairs />
      <Counselor />
      <AppStore />
      <IsLack />
    </Layout>
  );
};

export default Home;
