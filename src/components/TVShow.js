import React, { Component } from 'react';

export default class TVShow extends Component {
    
    renderTVShows() {
        var rows = [];
        if (this.props.payload !== null)
            for (var i = 0; i < this.props.payload.length; i++)
                rows.push(this.props.payload[0].show.title);
        else
            rows.push('nothing to show');
        return rows;
    }

    render() {
        return (
            <div>
                <button href='#' onClick={ () => this.props.fetchTVShow() } >Display TV Show</button>
                <ul>
                { this.renderTVShows().map(function (list) {
                            return <li>{ list }</li>;
                        }
                    )
                }
                </ul>
            </div>
        );
    }
}