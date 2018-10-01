import React from 'react';
import classes from './Tabs.module.css';

const Tabs = ({ children }) => <nav className={classes.root}>{children}</nav>;

export default Tabs;
