import React from 'react';
import { Route, Switch } from 'react-router'
import { injectGlobal, ThemeProvider } from 'styled-components'

// ROUTES
import Home from 'containers/Home'

// THEME
import theme from 'themes/default'

injectGlobal`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }
`

export default class extends React.Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </ThemeProvider>
    );
  }
}
