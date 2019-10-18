import React, {Component} from 'react';

import Header from '../../components/Navigation/Header/Header';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import InnerContent from '../../components/InnerContent/InnerContent';

import './Layout.css';

class Layout extends Component {
    state = {
        sideDrawerOpen: false,
        innerPage: ''
    }

    drawerToggleHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen}
        });
    }

    handleMenuItemClick = (e) => {
        e.preventDefault();
        this.setState({
            innerPage: e.target.title
        })
    }

    render() {
        
        return (
            <div className="container-fluid" style = {{height: '100%'}}>
                <div className="row">
                    <div className="col-md-12 header">
                        <Header
                            user = {this.props.user}
                            sideDrawerOpen = {this.state.sideDrawerOpen}
                            drawerToggleHandler = {this.drawerToggleHandler}
                            handleLogOut = {this.props.handleLogOut}
                        />
                    </div>
                    <div className="leftPanel">
                        <SideDrawer
                            sideDrawerOpen = {this.state.sideDrawerOpen}
                            handleMenuItemClick = {this.handleMenuItemClick}
                        />
                    </div>
                </div>
                <div className="row">
                    <main
                        className = "mainContent"
                        style = {this.state.sideDrawerOpen ? {marginLeft: '390px'} : null}>
                        <InnerContent
                            innerPage = {this.state.innerPage}
                        />
                    </main>
                </div>
            </div>
        )
    }
}

export default Layout;