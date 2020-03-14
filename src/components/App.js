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
import Websites from './Websites';
import Revolution from './Revolution';
import About from './About';

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
          <Route
            exact
            path="/websites"
            render={props => (
              <Websites
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/revolution"
            render={props => (
              <Revolution
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/about"
            render={props => (
              <About
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
                {...props}
              />
            )}
          />
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
