import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'

import Nav from '../components/Nav'

class Home extends Component {

    changeLoginValue() {
        this.props.dispatch(login())
    }

    render() {
        return (
            <div>
                <Nav changeLoginValue={ () => this.changeLoginValue() } loginButton={this.props.loginButton} />
                <p> Welcome to TrackdrammerV2 </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { login } = state;

    return {
        loginButton: login.loginButton
    }
}

export default connect(mapStateToProps)(Home)