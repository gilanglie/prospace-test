import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Route, Switch } from 'react-router' // react-router v4/v5
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from "./theme";
import {Main} from './router/Main';
export default function App() {

  let routes = (
    <Switch>
      <Route exact path="/" render={() => (<Main/>)} />
      <Route render={() => (<div>404 Page Not Found</div>)} />
    </Switch>
  )
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {routes}
    </ThemeProvider>
  );
}
