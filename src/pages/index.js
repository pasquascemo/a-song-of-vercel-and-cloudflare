import React from 'react';
import { Helmet } from 'react-helmet';

const Index = () =>(
  
<main>
	<Helmet>
		<title>A Song of Vercel and Cloudflare</title>
	</Helmet>
	<h1>Pasqua sei veramente scemo</h1>
	<p>
      clicca qui sotto!
      
    </p>
	<div id="spoiler" style="display:none">
bravo cretino potresti aver appena preso un vairus

	</div>
	<button title="Click to show/hide content" type="button" onclick="if(document.getElementById('spoiler') .style.display=='none') {document.getElementById('spoiler') .style.display=''}else{document.getElementById('spoiler') .style.display='none'}">Show/hide</button>
	<img src="https://media.giphy.com/media/26FxHq5tZj6gtWKGs/giphy.gif" />
	
	
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
</main>

);

export default Index;
