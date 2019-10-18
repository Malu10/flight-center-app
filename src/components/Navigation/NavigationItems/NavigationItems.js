import React from 'react';

import './NavigationItems.css';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem
            // path={props.location.pathname}
            handleMenuItemClick = {props.handleMenuItemClick}
        />
    </ul>
);

export default navigationItems;