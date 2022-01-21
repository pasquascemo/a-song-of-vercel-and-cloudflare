import React from 'react';
import { Helmet } from 'react-helmet';

const Index = () =>(
  <main>
    <Helmet>
      <title>Pasqua sei veramente scemo</title>
    </Helmet>
    <h1>Pasqua sei veramente scemo</h1>
	<p>
      visita il nostro{' '}
      <a
        href="https://commerce.pasquascemo.ml"
        rel="noreferrer noopener"
        target="_blank"
      >
        Shop
      </a>
      {' '}E ricordati di donare il 5 per mille al {' '}
      <a
        href="https://www.scemo.org"
        rel="noreferrer noopener"
        target="_blank"
      >
        Gretino Kojone
      </a>
      !
		
    </p>
    <img src="https://media.giphy.com/media/26FxHq5tZj6gtWKGs/giphy.gif" />
	    
	    <p style="font-size: 20px; color:#1F9AFE;">
<a href="prova.html">About this site</a>
</p>
	    
  </main>
);

export default Index;
