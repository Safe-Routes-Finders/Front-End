import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
//
//
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./Components/reducer/index";

//Define Store with 
const store = createStore(rootReducer, applyMiddleware(thunk));
//Define rootElement
const rootElement = document.getElementById('root');

ReactDOM.render(

<Provider store={store} >
        <App />
</Provider>,

rootElement
);

// , document.getElementById('root'));

