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
      <Tab label="Project" component={Link} to="/project" />
      <Tab label="About Us" component={Link} to="/about" />
    </Tabs>
    </AppBar>
  );
}));
const Project = () => {
  return(<div>Photo</div>)
};
const AboutUs = () => {
  return (<div>
    <body>
    <h1 > About Us </h1>
    <pre>
      This site was created by Uzma Kapadia, Mehak Sadique, Tanha Jyoti and Jennyfer Silva.
      This was created for us to learn about using the shutterstock api and connecting
      it to
    </pre>
    </body>
    </div>)
};
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <HeaderTabs />
          <Route path="/" exact component={Search} />
          <Route path="/project" exact component={Project} />
          <Route path="/about" exact component={AboutUs} />
        </Router>
      </ThemeProvider>
    );
  }
}
export default App;
