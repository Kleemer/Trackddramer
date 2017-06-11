import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { addWatchlist_util, fetchWatchlists } from '../actions/watchlist'

class Watchlists extends Component {
    constructor(props) {
        super(props);
        this.state = { value : '' }

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(fetchWatchlists(this.props.user_id))
    }

    handleChange(event) {
        this.setState({ value : event.target.value });
    }

    addWatchlist(name) {
        this.props.dispatch(addWatchlist_util(name, this.props.user_id));
    }

    renderWatchlists(watchlist) {
        var link = '/watchlists?id=' + watchlist.id;
        return <li key={ watchlist.id }><Link to={link}>{ watchlist.name }</Link></li>;
    }

    render() {
        return (
            <div>
                <h4>Watchlists</h4>
                <label>
                    Create new watchlist: 
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <button onClick={ () => this.addWatchlist(this.state.value) }>Add</button>

                <h4>Your watchlists :</h4>
                {   this.props.isFetching ?
                    <h3>Loading</h3>
                    :
                    <ul>
                    { this.props.watchlists.map(this.renderWatchlists) }
                    </ul>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user, watchlist } = state;

    return {
        user_id: user.id,
        watchlists: watchlist.list,
        isFetching: watchlist.isFetching
    }
}

export default connect(mapStateToProps)(Watchlists)