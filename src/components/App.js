import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import theme from './ui/Theme';
import Header from './ui/Header';
import Footer from './ui/Footer';
import LandingPage from './LandingPage';
import Services from './Services';
import CustomSoftware from './CustomSoftware';
import MobileApps from './MobileApps';

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <LandingPage
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/services"
            render={props => (
              <Services
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/custom-software"
            render={props => (
              <CustomSoftware
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/mobile-apps"
            render={props => (
              <MobileApps
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
                {...props}
              />
            )}
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
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
