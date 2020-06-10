import React from "react";
import ReactDom from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import "./style.css";
import App from './container/app'
import list from './reducer/list.js';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from "react-redux";

const store = createStore(list, composeWithDevTools(applyMiddleware(thunk)));
//console.log(store.getState());
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);