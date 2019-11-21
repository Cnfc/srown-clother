import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';



// const createStoreWithMiddleware = applyMiddleware(
//   promiseMiddleware,
//   ReduxThunk
// )(createStore);

ReactDOM.render(
  // <Provider
  //   store={createStoreWithMiddleware(
  //     Reducer,
  //     window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //     window.__REDUX_DEVTOOLS_EXTENSION__()
  //   )}
  // >
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </Provider >,

  document.getElementById("root")
);

