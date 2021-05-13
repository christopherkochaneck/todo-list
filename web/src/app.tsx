import { FC } from 'react';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
//layout
//**************** */

//pages
import { Home } from './pages/Home';
import { AddItem } from './pages/AddItem';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export const history = createBrowserHistory();
const App: FC = () => {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AddItem} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
