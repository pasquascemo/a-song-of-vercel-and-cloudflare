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
        href="www.scemo.org"
        rel="noreferrer noopener"
        target="_blank"
      >
        Gretino Kojone
      </a>
      !
		
		(function(w, d) {
  var panel = d.getElementsByClassName('spoiler');
  if (!panel) return;
  for (var i = 0, len = panel.length; i < len; ++i) {
    if (!panel[i].id) panel[i].id = 'spoiler-' + (i + 1);
  }
  function toggleSpoiler(elem, index) {
    var toggle = d.createElement('a'),
        toggleText = (elem[index].getAttribute('data-toggle-text') || '&nbsp;').split(' | '),
        togglePlacement = elem[index].getAttribute('data-toggle-placement') && elem[index].getAttribute('data-toggle-placement') !== 'bottom' ? elem[index].getAttribute('data-toggle-placement') : 'bottom';
    toggleText.push(toggleText[0]);
    toggle.className = 'spoiler-toggle';
    toggle.href = '#' + elem[index].id;
    toggle.innerHTML = toggleText[/(^| )spoiler-state-collapsed( |$)/.test(elem[index].className) ? 0 : 1];
    toggle.onclick = function() {
      var target = this.parentNode,
          isExpanded = /(^| )spoiler-state-expanded( |$)/.test(target.className),
          isConnected = target.getAttribute('data-connection');
      if (/(^| )spoiler-state-disabled( |$)/.test(target.className)) return false;
      target.className = isExpanded ? target.className.replace(/(^| )spoiler-state-expanded( |$)/, '$1spoiler-state-collapsed$2') : target.className.replace(/(^| )spoiler-state-collapsed( |$)/, '$1spoiler-state-expanded$2');
      this.innerHTML = toggleText[isExpanded ? 0 : 1];
      if (isConnected) {
        for (var i = 0, len = elem.length; i < len; ++i) {
          var isConnectedTo = elem[i].getAttribute('data-connection'),
              toggleTextSibling = (elem[i].getAttribute('data-toggle-text') || '&nbsp;').split(' | '),
              togglePlacementSibling = elem[i].getAttribute('data-toggle-placement') && elem[i].getAttribute('data-toggle-placement') !== 'bottom' ? elem[i].getAttribute('data-toggle-placement') : 'bottom';
          if (isConnectedTo && isConnected === isConnectedTo && target.id !== elem[i].id) {
            elem[i].className = elem[i].className.replace(/(^| )spoiler-state-expanded( |$)/, '$1spoiler-state-collapsed$2');
            elem[i].children[togglePlacementSibling === 'bottom' ? 1 : 0].innerHTML = toggleTextSibling[0];
          }
        }
      }
      return false;
    };
    toggle.onmousedown = false;
    elem[index].insertBefore(toggle, togglePlacement == 'bottom' ? null : elem[index].firstChild);
  }
  for (var i = 0, len = panel.length; i < len; ++i) {
    toggleSpoiler(panel, i);
  }
})(window, document);
		
    </p>
    <img src="https://media.giphy.com/media/26FxHq5tZj6gtWKGs/giphy.gif" />
  </main>
);

export default Index;
