import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import createSagaMiddleware from 'redux-saga'
import {  combineReducers } from 'redux';
import { Provider } from 'react-redux';
import CounterReducer from './CounterReducer.js';
import TodoReducer from './TodoReducer.js';
import todoSaga from './sagas.js'
import { configureStore } from '@reduxjs/toolkit'


const rootReducer = combineReducers({
   counter: CounterReducer,
   todo: TodoReducer

});

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(todoSaga)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
