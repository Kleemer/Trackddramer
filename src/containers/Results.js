import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPrevSearchResults, fetchNextSearchResults } from '../actions/search'
import { saveShow } from '../actions/show'

import SearchResult from '../components/SearchResult'

class Results extends Component {

    fetchPrev() {
        this.props.dispatch(fetchPrevSearchResults(this.props.page, this.props.request))
    }

    fetchNext() {
        this.props.dispatch(fetchNextSearchResults(this.props.page, this.props.request))
    }

    saveShow(show) {
        this.props.dispatch(saveShow(show))
    }

    render() {
        return (
            <div>
                <SearchResult login={this.props.login} saveShow={(show) => this.saveShow(show)} page={this.props.page} payload={this.props.payload} message={this.props.message}/>
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
    const { user, results } = state;

    return {
        login: user.login,
        page: results.page,
        payload: results.payload,
        message: results.message,
        request: results.request
    }
}

export default connect(mapStateToProps)(Results)