import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

function Header(props) {
  return (
    <AppBar position="fixed">
      <Toolbar>Arc Development</Toolbar>
    </AppBar>
  );
}

export default Header;
