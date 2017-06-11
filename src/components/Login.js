import React, { Component } from 'react';

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
                {
                this.props.login === '' ?
                <label>
                    Login:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                :
                <span> Welcome { this.props.login } </span>
                }
                <button onClick={ () => this.props.changeLoginValue(this.state.value) } > { this.props.loginButton }</button>
            </div>
        );
    }
}