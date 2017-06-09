import React, { Component } from 'react';

export default class SearchResult extends Component {
    

    renderMessage() {
        return <h4> { this.props.message } </h4>;
    }

    renderTVShows() {
        var rows = [];
        for (var obj of this.props.payload)
            rows.push(obj.show);
        return rows;
    }

    renderShow(show, index) {
        var link = '/shows?imdb=' + show.ids.imdb;
        return <li key={ index }><button onClick={() => this.props.saveShow(show)} >Save</button> <a href={link}>{ show.title }</a></li>;
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
                    this.renderTVShows().map(this.renderShow, this)
                }
                </ul>
            </div>
        );
    }
}