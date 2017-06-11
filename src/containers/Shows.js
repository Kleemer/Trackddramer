import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchSpecificSearchResults } from '../actions'

import Show from '../components/Show'

class Shows extends Component {

    renderShow(show, index) {
        var link = '/shows?trakt=' + show.ids.trakt;
        return <li key={ index }><Link to={link}>{ show.title }</Link></li>;
    }

    renderList() {
        var rows = [];
        for (var obj of this.props.list)
           rows.push(obj.value);
        return rows;
    }

    renderSpecific(show) {
        if (show)
            return <Show show={show.value}/>
        
        while (!show) {
            this.props.dispatch(fetchSpecificSearchResults(this.props.location.query.trakt))
            show = this.props.specific[0]
            console.log(show)
        }
        return <Show show={show.show}/>
    }

    filterSpecific(element) {
        return element.id == this.props.location.query.trakt
    }

    render() {
        return (
            <div>
                <p> Shows </p>
                {
                    this.props.location.query.trakt ?
                    this.renderSpecific(this.props.list.filter(this.filterSpecific, this)[0])
                    :
                    this.renderList().map(this.renderShow)
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user, results } = state;

    return {
        list: user.shows,
        specific: results.payload
    }
}

export default connect(mapStateToProps)(Shows)