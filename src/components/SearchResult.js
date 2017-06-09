import React, { Component } from 'react';

export default class SearchResult extends Component {
    

    renderMessage() {
        return <h4> { this.props.message } </h4>;
    }

    renderTVShows() {
        var rows = [];
        for (var obj of this.props.payload)
            rows.push(obj.show.title);
        return rows;
    }

    render() {
        return (
            <div>
                {
                    this.renderMessage()
                }
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