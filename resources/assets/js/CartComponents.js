import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers/allReducers';
import CartBtn from './components/CartBtn';
import CartPopup from './components/CartPopup';

const store = createStore(allReducers);

ReactDOM.render(<CartBtn />, document.getElementById('CartBtnRoot'));
ReactDOM.render(<CartPopup />, document.getElementById('CartPopupRoot'));
