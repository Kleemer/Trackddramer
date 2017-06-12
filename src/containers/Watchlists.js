import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { addWatchlist_util, fetchWatchlists, fetchSpecificWatchlistInfos_util, cleanWatchlists } from '../actions/watchlist'

class Watchlists extends Component {
    constructor(props) {
        super(props);
        this.state = { value : '' }

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(fetchWatchlists(this.props.user_id))
    }

    componentWillUnmount() {
        this.props.dispatch(cleanWatchlists())
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

    renderShow(show, index) {
        var link = '/shows?trakt=' + show.show_id;
        return <li key={ index }><button>Remove</button> <Link to={link}>{ show.show_name }</Link></li>;
    }

    renderSpecific() {
        if (!this.props.specific)
            this.props.dispatch(fetchSpecificWatchlistInfos_util(this.props.location.query.id));
        if (this.props.isFetchingSpecific)
            return (
                <div>
                    <h1>Loading watchlist</h1>
                </div>
            )
        let watchlist = this.props.specific;
        return (
            <div>
                <h4>{watchlist.name}</h4>
                {watchlist.shows.map(this.renderShow, this)}
            </div>
        )
    }

    render() {
        return (
            <div>
                <h4>Watchlists</h4>
                {
                    this.props.location.query.id ?
                    this.renderSpecific()
                    :
                    <span>
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
                    </span>
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
        specific: watchlist.specific,
        isFetching: watchlist.isFetching,
        isFetchingSpecific: watchlist.isFetchingSpecific
    }
}

export default connect(mapStateToProps)(Watchlists)