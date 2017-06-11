import React, { Component } from 'react'
import { connect } from 'react-redux'

class Watchlists extends Component {
    constructor(props) {
        super(props);
        this.state = { value : '' }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value : event.target.value });
    }

    addWatchlist(name) {

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

            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user } = state;

    return {
        watchlists: user.watchlists
    }
}

export default connect(mapStateToProps)(Watchlists)