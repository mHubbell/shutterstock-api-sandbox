import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Search from './Search';
import theme from './theme';

const tabStyles = { tabs: { 'margin-bottom': '10px' } };
const HeaderTabs = withRouter(withStyles(tabStyles)((props) => {
  const { classes, location } = props;
  const tabValues = {
    '/': 0,
  };
  return (
    <Tabs value={tabValues[location.pathname]} className={classes.tabs}>
      <Tab label="Welcome" component={Link} to="/" />
    </Tabs>
  );
}));

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <HeaderTabs />
          <Route path="/" exact component={Search} />
        </Router>
      </ThemeProvider>
    );
  }
}

export default hot(module)(App);
