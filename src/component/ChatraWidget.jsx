import { useEffect } from 'react';

const ChatraWidget = () => {
  useEffect(() => {
    (function(d, w, c) {
      w.ChatraID = 'mnbb5PY744hWsNvFC';
      var s = d.createElement('script');
      w[c] = w[c] || function() {
        (w[c].q = w[c].q || []).push(arguments);
      };
      s.async = true;
      s.src = 'https://call.chatra.io/chatra.js';
      if (d.head) d.head.appendChild(s);
    })(document, window, 'Chatra');
  }, []);

  return null; 
};

export default ChatraWidget;




// import { useEffect } from 'react';

// const CHATRA_ID = 'mnbb5PY744hWsNvFC'

// const ChatraWidget = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.async = true;
//     script.src = 'https://call.chatra.io/chatra.js';
//     script.onload = () => console.log('Chatra script loaded');
//     script.onerror = (e) => console.error('Chatra script error:', e);
//     window.ChatraID = CHATRA_ID;
//     window.Chatra =
//       window.Chatra ||
//       function () {
//         (window.Chatra.q = window.Chatra.q || []).push(arguments);
//       };
//     if (document.head) {
//       document.head.appendChild(script);
//     }
//     return () => {
//       if (script.parentNode) {
//         script.parentNode.removeChild(script);
//       }
//     };
//   }, []);

//   return <div id="chatra-widget" />;
// };

// export default ChatraWidget;

