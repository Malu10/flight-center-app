import React from 'react';

import DrawerToggle from '../DrawerToggle/DrawerToggle';
import SearchBar from '../SearchBar/SearchBar';

import './Header.css';

const header = (props) => {
    return (
        <header
            style={props.sideDrawerOpen ? {marginLeft: '390px'} : null}
        >
            <nav className="row head">
                <div className="col-md-1 col-sm-1 col-xs-6">
                    <DrawerToggle 
                        drawerToggleHandler = {props.drawerToggleHandler}
                    />
                </div>
                <div className="col-md-5 col-sm-5 hidden-xs">
                    <SearchBar/>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6 text-right message">
                    Hi, {props.user}
                    <button
                        onClick = {props.handleLogOut}
                        className = "logout-btn"
                    >Logout</button>
                </div>
            </nav>
        </header>
    )
}

export default header;