import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, fetchLoginWithTrakt } from '../actions'

import Nav from '../components/Nav'

class Home extends Component {

    changeLoginValue() {
        if (this.props.loginButton === 'login')
            this.props.dispatch(fetchLoginWithTrakt())
        else
            this.props.dispatch(login())
    }

    render() {
        return (
            <div>
                <Nav changeLoginValue={ () => this.changeLoginValue() } loginButton={this.props.loginButton} authUrl={this.props.authUrl}/>
                <p> Welcome to TrackdrammerV2 </p>
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { login } = state;

    return {
        loginButton: login.loginButton,
        authUrl: login.authUrl
    }
}

export default connect(mapStateToProps)(Home)