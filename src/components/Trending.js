import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cleanShow, fetchPrevTrending, fetchNextTrending } from '../actions/search'
import { saveShow_util } from '../actions/show'

import SearchResult from '../components/SearchResult'

class Trending extends Component {

    componentWillMount() {
        this.props.dispatch(cleanShow());
        this.fetchNext();
    }

    fetchPrev() {
        this.props.dispatch(fetchPrevTrending(this.props.page, this.props.request))
    }

    fetchNext() {
        this.props.dispatch(fetchNextTrending(this.props.page, this.props.request))
    }

    saveShow(show, watchlist_id) {
        this.props.dispatch(saveShow_util(show, watchlist_id))
    }

    render() {
        return (
            <div className="container">
                <SearchResult login={this.props.login} watchlists={this.props.watchlists} saveShow={(show, watchlist_id) => this.saveShow(show, watchlist_id)} page={this.props.page} payload={this.props.payload} message={this.props.message}/>
                {this.props.page > 1 &&
                  <button className="pagination-previous" onClick={() => this.fetchPrev()}>Previous page</button>
                }                
                {this.props.page > 0 && this.props.message !== 'No results anymore' &&
                  <button className="pagination-next" onClick={() => this.fetchNext()}>Next page</button>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user, watchlist, results } = state;

    return {
        login: user.login,
        watchlists: watchlist.list,
        page: results.page,
        payload: results.payload,
        message: results.message,
        request: results.request
    }
}

export default connect(mapStateToProps)(Trending)