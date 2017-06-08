import React, { Component } from 'react';

export default class TVShow extends Component {
    
    renderTVShows() {
        var rows = [];
        if (this.props.payload)
            if (typeof this.props.payload === 'string')
                rows.push(this.props.payload);
            else
                for (var obj of this.props.payload)
                    rows.push(obj.show.title);
        return rows;
    }

    render() {
        return (
            <div>
                <ul>
                {
                    this.renderTVShows().map(function (list) {
                            return <li key="list">{ list }</li>;
                        }
                    )
                }
                </ul>
                <button>Display TV Show</button>
            </div>
        );
    }
}