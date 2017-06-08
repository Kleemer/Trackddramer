import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { fetchTVShow } from '../actions'

import TVShow from '../components/TVShow'

class Shows extends Component {
    render() {
        return (
            <div>
                <p> Shows </p>
                <TVShow payload={this.props.payload}/>
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