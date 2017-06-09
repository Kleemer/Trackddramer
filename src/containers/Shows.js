import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPrevSearchResults, fetchNextSearchResults } from '../actions'

import SearchResult from '../components/SearchResult'

class Shows extends Component {

    fetchPrev() {
        this.props.dispatch(fetchPrevSearchResults(this.props.page, this.props.request))
    }

    fetchNext() {
        this.props.dispatch(fetchNextSearchResults(this.props.page, this.props.request))
    }
    render() {
        return (
            <div>
                <p> Shows </p>
                <SearchResult page={this.props.page} payload={this.props.payload} message={this.props.message}/>
                {this.props.page > 1 &&
                  <button onClick={() => this.fetchPrev()}>Previous page</button>
                }                
                {this.props.page > 0 && this.props.message !== 'No results anymore' &&
                  <button onClick={() => this.fetchNext()}>Next page</button>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { shows } = state;

    return {
        page: shows.page,
        payload: shows.payload,
        message: shows.message,
        request: shows.request
    }
}

export default connect(mapStateToProps)(Shows)