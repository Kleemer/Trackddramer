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
                <button href='#' onClick={ () => this.props.changeLoginValue() } > { this.props.loginButton }</button>
            </div>
        );
    }
}