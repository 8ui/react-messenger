// REDUX
import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './reducers'
const middlewares = [];

// SAGA
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
const sagaMiddleware = createSagaMiddleware()
middlewares.push(applyMiddleware(sagaMiddleware))

// REACT ROUTER
import { routerMiddleware } from 'react-router-redux'
import { history } from 'core/utils'
middlewares.push(applyMiddleware(routerMiddleware(history)))

// LOGGER
import { createLogger } from 'redux-logger'
const __PRODUCTION__ = __PRODUCTION__ || process.env.NODE_ENV === 'production'; // eslint-disable-line
if (!__PRODUCTION__) {
  const logger = createLogger({
    collapsed: true
  });
  middlewares.push(applyMiddleware(logger))
}


export default function configureStore () {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = composeEnhancers(
    ...middlewares,
  )(createStore)(rootReducer)

  // then run the saga
  let sagaTask = sagaMiddleware.run(sagas)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').rootReducer
      store.replaceReducer(nextRootReducer)
    });

    module.hot.accept('./sagas', () => {
      const nextSagas = require('./sagas').default
      sagaTask.cancel()
      sagaTask.done.then(() => {
        sagaTask = sagaMiddleware.run(nextSagas)
      })
    })
  }

  return store
}
