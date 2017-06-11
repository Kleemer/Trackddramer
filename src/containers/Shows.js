import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSpecificSearchResults } from '../actions'

class Shows extends Component {

    componentWillMount() {
        console.log("avant")
        this.props.dispatch(fetchSpecificSearchResults(this.props.location.query.trakt))
        console.log("apres")
    }

    renderSpecific() {
        console.log(this.props.isFetching)
        if (this.props.isFetching)
            return (
                <div>
                    <h1>Loading show</h1>
                </div>
            )

        let show = this.props.specific[0].show;
        return (
            <div>
                <h4>Show : {show.title} ({show.year})</h4>
                {show.overview}
            </div>
        )
    }

    render() {
        return (
            <div>
                { this.renderSpecific() }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { results } = state;

    return {
        isFetching: results.isFetching,
        specific: results.payload
    }
}

export default connect(mapStateToProps)(Shows)