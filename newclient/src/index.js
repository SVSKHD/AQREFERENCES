import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

import {configureStore} from "@reduxjs/toolkit"
import {Provider} from "react-redux"
import rootReducer from "./reducers";

// store
const store = configureStore({reducer:rootReducer});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
   <App />
  </Provider>
);


