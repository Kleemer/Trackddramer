import React, { Component } from 'react';

export default class Show extends Component {
    render() {
        return (
            <div>
                <h4>Show : {this.props.show.title} ({this.props.show.year})</h4>
                {this.props.show.overview}
            </div>
        )
    }
}