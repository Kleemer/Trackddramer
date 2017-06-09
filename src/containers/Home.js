import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, logout, fetchNextSearchResults } from '../actions'

import Nav from '../components/Nav'

class Home extends Component {

    changeLoginValue() {
        if (this.props.loginButton === 'login')
            this.props.dispatch(login())
        else
            this.props.dispatch(logout())
    }

    fetchSearch(text) {
        this.props.dispatch(fetchNextSearchResults(this.props.page, text))
    }

    render() {
        return (
            <div>
                <Nav page={this.props.page} fetchSearch={ (text) => this.fetchSearch(text) } changeLoginValue={ () => this.changeLoginValue() } loginButton={this.props.loginButton}/>
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user } = state;

    return {
        loginButton: user.loginButton
    }
}

export default connect(mapStateToProps)(Home)