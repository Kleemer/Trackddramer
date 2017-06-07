import React, { Component } from 'react';

export default class TVShow extends Component {
    render() {
        return (
            <div>
                TV Show : { this.props.name }
            </div>
        );
    }
}