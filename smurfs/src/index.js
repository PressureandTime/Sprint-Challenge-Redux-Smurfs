import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import {
  smurfsReducer,
  errorSmurfReducer,
  requestPendingReducer
} from './reducers/reducers';

const combinedReducer = combineReducers({
  smurfs: smurfsReducer,
  errorSmurfs: errorSmurfReducer,
  requestPending: requestPendingReducer
});

// const store = createStore(
//   () => {}, // this is the most basic reducer. A function that returns and object. Replace it.
//   applyMiddleware(/* be sure to throw in the proper middlewares here*/)
// );

const store = createStore(
  combinedReducer,
  {},
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>,
  document.getElementById('root')
);
