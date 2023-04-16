import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

import { createStore } from 'redux'
import {Provider} from "react-redux"
import {composeWithDevTools} from "redux-devtools-extension"
import rootReducer from "./reducers";

// store
const store = createStore(rootReducer, composeWithDevTools());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
   <App />
  </Provider>
);


