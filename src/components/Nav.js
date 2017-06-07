import React, { Component } from 'react';

export default class Nav extends Component {

    render() {
        return (
            <div>
                <a href='/'>Home</a>
                { ' ' }
                <a href='/shows'>Shows</a>
                { ' ' }
                <button href='#' onClick={ () => this.props.changeLoginValue() } > { this.props.loginButton }</button>
            </div>
        );
    }
}