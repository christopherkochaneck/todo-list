import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
const App = lazy(() => import('./app'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading...</h1>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
