import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import './SideDrawer.css';

const sideDrawer = ( props ) => {
    let panelClass = 'row SideDrawer';
    if(props.sideDrawerOpen) {
        panelClass = 'row SideDrawer open';
    }
    return (
        <div className={panelClass}>
            <div className="col-md-12 Logo">
                <Logo/>
            </div>
            <nav className="col-md-12">
                <NavigationItems
                    handleMenuItemClick = {props.handleMenuItemClick}
                />
            </nav>
            <div className="col-md-12 side-footer">
                Powered By TPConnects 1.7.9
            </div>
        </div>
    );
};

export default sideDrawer;