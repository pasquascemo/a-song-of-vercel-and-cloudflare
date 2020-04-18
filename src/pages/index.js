import React from 'react';
import { Helmet } from 'react-helmet';

const Index = () =>(
  <main>
    <Helmet>
      <title>A Song of ZEIT and Cloudflare</title>
    </Helmet>
    <h1>A Song of ZEIT and Cloudflare</h1>
    <p>
      Deployed with{' '}
      <a
        href="https://zeit.co/docs"
        rel="noreferrer noopener"
        target="_blank"
      >
        ZEIT
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
