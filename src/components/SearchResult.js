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
        let classMessage;
        if (this.props.message === "Nothing to show" || this.props.message === "No results anymore")
            classMessage = "title has-text-centered"
        else
            classMessage = "title"
        return <h1 className={classMessage}> { this.props.message } </h1>
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
        return <tr key={ index }>
            {
                this.props.login &&
                <td>
                    <button className="button" onClick={() => {console.log("debug: "); console.log(this.state); this.props.saveShow(show, this.state[name])} } >Add</button>
                    <span className="select">
                    <select name={name} value={this.state.name} onChange={this.handleChange}>
                        <option>{this.state.value}</option>
                        {this.props.watchlists.map(this.renderSelect)}
                    </select>
                    </span>
                </td>
            }
            <td>
            <Link to={link}>{ show.title }</Link>
            </td>
            </tr>;
    }


    render() {
        return (
            <div>
                {
                    this.renderMessage()
                }
                <p className="">Page : <strong>{ this.props.page }</strong></p>
                <table className="table is-striped">
                    <thead>
                        {this.props.login &&
                            <th>Watchlist</th>
                        }
                        <th>Title</th>
                    </thead>
                    <tbody>
                    {
                        this.renderTVShows().map(this.renderShow, this)
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}