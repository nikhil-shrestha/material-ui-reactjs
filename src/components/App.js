import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import theme from './ui/Theme';
import Header from './ui/Header';
import Footer from './ui/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <div style={{ height: '2000px' }}>Home</div>}
          />
          <Route exact path="/services" component={() => <div>Services</div>} />
          <Route
            exact
            path="/custom-software"
            component={() => <div>Custom Software</div>}
          />
          <Route
            exact
            path="/mobile-apps"
            component={() => <div>Mobile Apps</div>}
          />
          <Route exact path="/websites" component={() => <div>Websites</div>} />
          <Route
            exact
            path="/revolution"
            component={() => <div>The Revolution</div>}
          />
          <Route exact path="/about" component={() => <div>About Us</div>} />
          <Route exact path="/contact" component={() => <div>Contacts</div>} />
          <Route
            exact
            path="/estimate"
            component={() => <div>Estimates</div>}
          />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
