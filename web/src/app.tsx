import { FC } from 'react';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { ApiStatusProvider } from './contexts/apiStatus';
import { ItemsProvider } from './contexts/getItems';
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
      <ApiStatusProvider>
        <ItemsProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Switch>
              <Route exact path="/items/" component={Home} />
              <Route exact path="/items/add" component={AddItem} />
              <Route exact path="/items/details/:id" component={ItemDetails} />
              <Redirect exact path="/" to="/items" />
            </Switch>
          </ThemeProvider>
        </ItemsProvider>
      </ApiStatusProvider>
    </Router>
  );
};

export default App;
