import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk'
import {BrowserRouter as Router} from "react-router-dom";
import authreducer from './store/reducer/authreducer';
import profilereducer from './store/reducer/profilereducer';
const rootReducer = combineReducers({
  auth: authreducer,
  profile: profilereducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
  
    <Router>
    <Provider store = {store}>
    <App />
    </Provider>
    </Router>    
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
