import React from 'react';
import Layout from '../components/layout/layout';

import Home from '../sections/home';
import Portfolio from '../sections/portfolio';
import About from '../sections/about';

const IndexPage = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Portfolio />
    </Layout>
  );
};

export default IndexPage;
