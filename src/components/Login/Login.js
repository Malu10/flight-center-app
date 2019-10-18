import React, {Component} from 'react';

import adminLogo from '../../assets/images/adminLogo.png';

import Button from '../UI/Button/Button';
import Layout from '../../containers/Layout/Layout';

import { connect } from 'react-redux';
import { login } from '../../redux/reducer';

import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'tpconnects',
            password: '1234',
            isLogin: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let { username, password, isLogin } = this.state;
        this.props.login(username, password);
        this.setState({
            isLogin: !isLogin
        });
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ 
            [name]: value 
        });
    }

    handleLogOut = () => {
        this.setState({
            isLogin: false
        })
    }

    render() {
        
        return (
            <div className="container-fluid">
            {(!this.state.isLogin) ?
                <div className="row loginPage">
                    <div className="col-md-6 airplane-block">
                        <div className="airplane-bg"></div>
                    </div>
                    <div className="col-md-6 right-block">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <img src={adminLogo} alt="Logo"/>
                            </div>
                        </div>
                        <div className="row signIn-txt">
                            <div className="col-md-12">
                                <h3>Sign In</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <form
                                    className = "form-horizontal loginForm"
                                    onSubmit = {this.handleSubmit}
                                >
                                    <div className="form-group">
                                        <input
                                            type = "text"
                                            className = "form-control"
                                            name = "username"
                                            value = {this.state.username}
                                            onChange = {this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type = "password"
                                            name = "password"
                                            className = "form-control"
                                            value = {this.state.password}
                                            onChange = {this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button className="forgot-link">
                                            Forgot Password ?
                                        </button>
                                    </div>
                                    <div className="form-group">
                                        <Button
                                            name = "Submit"
                                            btnColor = "red"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                : null }
                {this.state.isLogin ? 
                    <Layout
                        user = {this.state.username}
                        isLogin = {this.state.isLogin}
                        handleLogOut = {this.handleLogOut}
                    />
                :
                    null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        loginError: state.loginError
    };
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => dispatch(login(username, password))
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);