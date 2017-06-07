import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTVShow } from '../actions'

import TVShow from '../components/TVShow'

class Shows extends Component {

    fetchTVShow() {
        this.props.dispatch(fetchTVShow('tt0904208', 'imdb'));
    }

    render() {
        return (
            <div>
                <p> Shows </p>
                <TVShow fetchTVShow={ () => this.fetchTVShow() } payload={this.props.payload}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { shows } = state;

    return {
        payload: shows.payload
    }
}

export default connect(mapStateToProps)(Shows)