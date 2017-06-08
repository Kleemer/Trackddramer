import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, logout, fetchSearchResults } from '../actions'

import Nav from '../components/Nav'

class Home extends Component {

    changeLoginValue() {
        if (this.props.loginButton === 'login')
            this.props.dispatch(logout())
        else
            this.props.dispatch(login())
    }

    fetchSearch(text) {
        this.props.dispatch(fetchSearchResults(text))
    }

    render() {
        return (
            <div>
                <Nav fetchSearch={ (text) => this.fetchSearch(text) } changeLoginValue={ () => this.changeLoginValue() } loginButton={this.props.loginButton}/>
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