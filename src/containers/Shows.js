import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { fetchTVShow } from '../actions'

import TVShow from '../components/TVShow'

class Shows extends Component {
    render() {
        return (
            <div>
                <p> Shows </p>
                <TVShow page={this.props.page} payload={this.props.payload}/>
                {this.props.page > 0 &&
                  <button>Next page</button>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { shows } = state;

    return {
        page: shows.page,
        payload: shows.payload
    }
}

export default connect(mapStateToProps)(Shows)