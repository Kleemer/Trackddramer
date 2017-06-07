import React, { Component } from 'react';

export default class TVShow extends Component {
    render() {
        return (
            <div>
                <button href='#' onClick={ () => this.props.fetchTVShow() } >Display TV Show</button>
                {
                    this.props.payload !== null ?
                        this.props.payload[0].show.title : 'nothing to show'
                }
            </div>
        );
    }
}