import React, { memo } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';

import Navbar from '../Navbar';
import styles from './Header.module.scss';

const Header = (): JSX.Element => (
  <AppBar position="static">
    <Toolbar className={styles.container}>
      <Typography variant="h6">
        Money control app
      </Typography>
      <Navbar />
    </Toolbar>
  </AppBar>
);

export default memo(Header);
