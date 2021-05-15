import { FC } from 'react';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
//layout
//**************** */

//pages
import { Home } from './pages/Home';
import { AddItem } from './pages/AddItem';
import { ItemDetails } from './pages/ItemDetails';
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
          <Route exact path="/items/" component={Home} />
          <Route exact path="/items/add" component={AddItem} />
          <Route exact path="/items/details/:id" component={ItemDetails} />
          <Redirect exact path="/" to="/items" />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
