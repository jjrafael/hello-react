// import { createStore, applyMiddleware, compose } from "redux";
// import { hashHistory } from "react-router";
// import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
// import createSagaMiddleware from "redux-saga";
// import { reducers } from "./reducers/index";
// import { sagas } from "./sagas/index";

// // add the middlewares
// let middlewares = [];

// // add the router middleware
// middlewares.push(routerMiddleware(hashHistory));

// // add the saga middleware
// const sagaMiddleware = createSagaMiddleware();
// middlewares.push(sagaMiddleware);

// // apply the middleware
// let middleware = applyMiddleware(...middlewares);

// // add the redux dev tools
// if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
//   middleware = compose(middleware, window.devToolsExtension());
// }

// // create the store
// const store = createStore(reducers, middleware);
// const history = syncHistoryWithStore(hashHistory, store);
// sagaMiddleware.run(sagas);

// // export
// export { store, history };

// -----------------------------

import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import createSagaMiddleware from "redux-saga";
import { reducers } from "./reducers/index";
import { sagas } from "./sagas/index";

export const history = createHistory()

const enhancers = []
const middleware = [
  routerMiddleware(history)
]
const sagaMiddleware = createSagaMiddleware();

let middleware = applyMiddleware(...middlewares);

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

// create the store
const store = createStore(reducers, middleware, composedEnhancers);
//const history = syncHistoryWithStore(hashHistory, store);
sagaMiddleware.run(sagas);

export default store
