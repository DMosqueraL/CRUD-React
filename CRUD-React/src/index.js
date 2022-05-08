import React from 'react';
/**react-dom fue reemplazado por react-dom/client en React18 */
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';

/** Sentencia en desuso en React18
 * ReactDOM.render(<App />, document.getElementById('root'));**/

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
   <React.StrictMode>
     <App />
   </React.StrictMode>
 );