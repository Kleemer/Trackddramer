import React, { Component } from 'react';

export default class Show extends Component {
    render() {
        return (
            <div>
                <h4>Show : {this.props.show.name}</h4>
                {this.props.show.overview}
            </div>
        )
    }
}