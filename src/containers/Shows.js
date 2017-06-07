import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'

import Nav from '../components/Nav'

class Shows extends Component {
    
    changeLoginValue() {
        this.props.dispatch(login())
    }

    render() {
        return (
            <div>
                <Nav changeLoginValue={ () => this.changeLoginValue() } loginButton={this.props.loginButton} />
                <p> Shows </p>
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

export default connect(mapStateToProps)(Shows)