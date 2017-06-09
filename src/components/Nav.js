import React, { Component } from 'react';
import { Link } from 'react-router'
import { fetchSearchResults } from '../actions'

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { value : '' }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value : event.target.value });
    }

    handleSubmit(event) {
        fetchSearchResults(this.props.page, this.state.value);
        alert('search: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                { ' ' }
                <Link to="/shows">Shows</Link>
                { ' ' }
                {
                    this.props.authUrl ?
                    <span>
                        <button onClick={ () => this.props.changeLoginValue() } > { this.props.loginButton }</button>
                        <a href={ this.props.authUrl }>Click here to connect with Trakt</a>
                    </span>
                    :
                        <button href='#' onClick={ () => this.props.changeLoginValue() } > { this.props.loginButton }</button>
                }
                { ' ' }
                    <label>
                        Search:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <button onClick={ () => this.props.fetchSearch(this.state.value) }>Search</button>
            </div>
        );
    }
}