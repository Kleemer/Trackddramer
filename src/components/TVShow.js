import React, { Component } from 'react';

export default class TVShow extends Component {
    
    renderTVShows() {
        var rows = [];
        if (this.props.payload !== [])
            for (var obj of this.props.payload)
                rows.push(obj.show.title);
        return rows;
    }

    render() {
        return (
            <div>
                <p>Page : { this.props.page }</p>
                <ul>
                {
                    this.renderTVShows().map(function (show, index) {
                            return <li key={ index }>{ show }</li>;
                        }
                    )
                }
                </ul>
            </div>
        );
    }
}