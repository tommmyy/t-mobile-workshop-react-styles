import React from 'react';
import classNames from "classnames";
import classes from './Tab.module.css';

const Tab = ({ children, href, active }) => (
	<a
		href={href}
		className={classNames({
			[classes.root]: true,
			[classes.active]: active,
		})}
	>
		{children}
	</a>
);

export default Tab;
