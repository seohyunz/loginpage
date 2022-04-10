import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import {Provider} from 'react-redux';
import { applyMiddleware, createStore} from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './_reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore)
const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
  <Provider 
      store={createStoreWithMiddleware(Reducer,
          window.__REDUX_DEVTOOLS_EXTENSION__&&
          window.__REDUX_DEVTOOLS_EXTENSION__()
  )}>
    <App />
  </Provider>,
);

reportWebVitals();