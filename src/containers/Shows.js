import React, { Component } from 'react'
import { connect } from 'react-redux'

import Show from '../components/Show'

class Shows extends Component {

    renderShow(show, index) {
        var link = '/shows?imdb=' + show.ids.imdb;
        return <li key={ index }><a href={link}>{ show.title }</a></li>;
    }

    renderList() {
        var rows = [];
         for (var obj of this.props.list)
            rows.push(obj);
        console.log(rows);
        return rows;
    }

    renderSpecific() {

    }

    render() {
        return (
            <div>
                <p> Shows </p>
                {
                    this.props.location.query ?
                    this.renderList().map(this.renderShow)
                    :
                    this.renderSpecific()
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { shows } = state;

    return {
        list: shows.shows
    }
}

export default connect(mapStateToProps)(Shows)