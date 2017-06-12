import React, { Component } from 'react'
import { connect } from 'react-redux'

class Restricted extends Component {

    render() {
        return (
            <div className="has-text-centered">
                <h2 className="title">Access restricted, please login first</h2>
            </div>
        );
    }
}

export default connect()(Restricted)