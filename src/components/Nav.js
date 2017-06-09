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
            <div>
                <Link to="/">Home</Link>
                { ' ' }
                <Link to="/shows">Shows</Link>
                { ' ' }
                <label>
                    Search:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <button onClick={ () => this.props.fetchSearch(this.state.value) }>Search</button>
                <Login changeLoginValue={() => this.props.changeLoginValue()} loginButton={this.props.loginButton}/>
            </div>
        );
    }
}