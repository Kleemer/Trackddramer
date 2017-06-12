import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLogin, logout_clean } from '../actions/login'
import { fetchNextSearchResults } from '../actions/search'
import Nav from '../components/Nav'

class Home extends Component {

    changeLoginValue(login) {
        if (this.props.loginButton === 'login')
            this.props.dispatch(fetchLogin(login))
        else
            this.props.dispatch(logout_clean())
    }

    fetchSearch(text) {
        this.props.dispatch(fetchNextSearchResults(this.props.page, text))
    }

    render() {
        return (
            <div>
                <Nav login={this.props.login} page={this.props.page} fetchSearch={ (text) => this.fetchSearch(text) } changeLoginValue={ (login) => this.changeLoginValue(login) } loginButton={this.props.loginButton}/>
                <section className="hero is-light">
                    <div className="hero-body">
                        {this.props.children}
                    </div>
                </section>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user } = state;

    return {
        id: user.id,
        login: user.login,
        loginButton: user.loginButton
    }
}

export default connect(mapStateToProps)(Home)