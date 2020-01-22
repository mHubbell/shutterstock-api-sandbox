import React, { Component } from 'react';
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
import AppBar from '@material-ui/core/AppBar';

const tabStyles = { tabs: { 'margin-bottom': '10px' } };
const HeaderTabs = withRouter(withStyles(tabStyles)((props) => {
  const { classes, location } = props;
  const tabValues = {
    '/': 0,
  };
  return (
    <AppBar position="static" color="default">
    <Tabs value={tabValues[location.pathname]} className={classes.tabs}>
      <Tab label="Welcome :)" component={Link} to="/" />
      <Tab label="Photo" component={Link} to="/photos" />
      <Tab label="Memes" component={Link} to="/memes" />
      <Tab label="About Us" component={Link} to="/about" />
    </Tabs>
    </AppBar>

  );
}));

const Photo = () => {
  return(<div>Photo</div>)
};

const Memes = () => {
  return (<div>Memes</div>)
};

const AboutUs = () => {
  return (<div>
    <h1> About Us </h1></div>)
};


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <HeaderTabs />
          <Route path="/" exact component={Search} />
          <Route path="/photo" exact component={Photo} />
          <Route path="/memes" exact component={Memes} />
          <Route path="/about" exact component={AboutUs} />
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
