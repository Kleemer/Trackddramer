import React, { Component } from 'react';
import { Link } from 'react-router'

export default class SearchResult extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 'Select watchlist'};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }
    renderMessage() {
        return <h4> { this.props.message } </h4>;
    }

    renderTVShows() {
        var rows = [];
        for (var obj of this.props.payload)
            rows.push(obj.show);
        return rows;
    }

    renderSelect(watchlist) {
        return <option key={watchlist.id} value={watchlist.id}>{watchlist.name}</option>
    }

    renderShow(show, index) {
        var link = '/shows?trakt=' + show.ids.trakt;
        let name = show.ids.trakt;
        return <li key={ index }>
            {
                this.props.login &&
                <span>
                    <button onClick={() =>this.props.saveShow(show, this.state[name]) } >Add</button>
                    <select name={name} value={this.state.name} onChange={this.handleChange}>
                        {this.props.watchlists.map(this.renderSelect)}
                    </select>
                </span>
            }
            <Link to={link}>{ show.title }</Link></li>;
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