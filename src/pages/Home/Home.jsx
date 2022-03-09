import React from 'react';

import Layout from './Layout';
import {
  Intro,
  Question,
  Features,
  Stairs,
  Counselor,
  AppStore,
  Meet,
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
      <Meet />
    </Layout>
  );
};

export default Home;
