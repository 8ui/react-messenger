import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from 'app/views/components/App'

// REACT ROUTER
import { ConnectedRouter } from 'react-router-redux'
import { history } from 'core/utils'

// REDUX
import { Provider } from 'react-redux'
import configureStore from 'core/store'
import { appActions } from 'core/app';

const store = configureStore()
const root = document.getElementById('root')

const renderApp = (App) => (
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </AppContainer>
)

store.dispatch(appActions.initApp());
render(renderApp(App), root)

if (module.hot) {
  module.hot.accept('app/views/components/App', () => {
    const App = require('app/views/components/App').default;
    render(renderApp(App), root)
  })
}
