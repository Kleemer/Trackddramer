import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, logout, fetchSearchResults, authorizeTrakt, exchange_code } from '../actions'

import Nav from '../components/Nav'
import Trakt from '../components/Trakt'

class Home extends Component {

    changeLoginValue() {
        if (this.props.loginButton === 'login')
            this.props.dispatch(logout())
        else
            this.props.dispatch(login())
    }

    fetchSearch(text) {
        this.props.dispatch(fetchSearchResults(this.props.page, text))
    }

    authorizeTrakt(code) {
        this.props.dispatch(authorizeTrakt(code))
    }

    exchange_code(code) {
        this.props.dispatch(exchange_code(code))
    }

    render() {
        return (
            <div>
                <Nav page={this.props.page} fetchSearch={ (text) => this.fetchSearch(text) } changeLoginValue={ () => this.changeLoginValue() } loginButton={this.props.loginButton}/>
                
                <button onClick = { this.authorizeTrakt(this.props.location.query.code) } >Authorize</button>
                
                <Trakt exchange_code={ (code) => this.exchange_code(code) }/>
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