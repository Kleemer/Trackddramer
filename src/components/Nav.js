import React, { Component } from 'react';
import { Link } from 'react-router'

import Login from './Login'

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { value : '' }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value : event.target.value });
    }

    render() {
        return (
            <nav className="nav">
                <div className="nav-left">
                    <Link to="/" className="nav-item">Home</Link>
                    { ' ' }
                    <Link to="/watchlists" className="nav-item">Watchlists</Link>
                    { ' ' }
                </div>
                <div className="nav-center">
                    <span className="nav-item">
                        <label>
                            Search:
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <button onClick={ () => this.props.fetchSearch(this.state.value) }>Search</button>
                    </span>
                </div>
                <div className="nav-right">
                    <Login login={this.props.login} changeLoginValue={(login) => this.props.changeLoginValue(login)} loginButton={this.props.loginButton}/>
                </div>
            </nav>
        );
    }
}