import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Loading } from './components/Loading';
import './styles.scss';
const App = lazy(() => import('./app'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
