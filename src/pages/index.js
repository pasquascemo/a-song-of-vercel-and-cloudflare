import React from 'react';
import { Helmet } from 'react-helmet';

const Index = () =>(
  <main>
    <Helmet>
      <title>Pasqua sei veramente scemo</title>
    </Helmet>
    <h1>Pasqua sei veramente scemo</h1>
    <p>
      Deployed with{' '}
      <a
        href="https://vercel.com/docs"
        rel="noreferrer noopener"
        target="_blank"
      >
        Vercel
      </a>
      {' '}and proxied by{' '}
      <a
        href=""
        rel="noreferrer noopener"
        target="_blank"
      >
        Cloudflare
      </a>
      !
    </p>
    <img src="https://media.giphy.com/media/26FxHq5tZj6gtWKGs/giphy.gif" />
  </main>
);

export default Index;
