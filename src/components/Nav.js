import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Nav extends Component {
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
                        <button href='#' onClick={ () => this.props.changeLoginValue() } > { this.props.loginButton }</button>
                        <a href={ this.props.authUrl }>Click here to connect with Trakt</a>
                    </span>
                    :
                        <button href='#' onClick={ () => this.props.changeLoginValue() } > { this.props.loginButton }</button>
                }
            </div>
        );
    }
}