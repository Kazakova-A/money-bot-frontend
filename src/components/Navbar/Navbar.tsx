import React, { memo } from 'react';
import { List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

import {
  MENU,
} from './constants';
import styles from './Navbar.module.scss';

const isAuth = false; // TODO: check this state in token

const Navbar = (): JSX.Element => (
  <List>
    {isAuth && MENU.map((item) => (
      <ListItem>
        <Link
          to={item.link}
          key={item.title}
          className={styles.link}
        >
          {item.title}
        </Link>
      </ListItem>
    ))}
  </List>
);

export default memo(Navbar);
