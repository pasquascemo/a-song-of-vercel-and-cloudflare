import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  return (
    <main>
      <Helmet>
        <title>A Song of ZEIT and Cloudflare</title>
      </Helmet>
      <h1>A Song of ZEIT and Cloudflare</h1>
      <p>
        Deployed with{' '}
        <a
          href="https://zeit.co/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          ZEIT Now
        </a>
        proxied by{' '}
        <a
          href=""
          target="_blank"
          rel="noreferrer noopener"
        >
          Cloudflare
        </a>
        !
      </p>
    <img src="https://media.giphy.com/media/26FxHq5tZj6gtWKGs/giphy.gif" />
    </main>
  );
}

export default Index;
