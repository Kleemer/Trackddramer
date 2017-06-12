import React, { Component } from 'react'
import { connect } from 'react-redux'

class Restricted extends Component {

    render() {
        return (
            <div>
                <h2>Access restricted, please login first</h2>
            </div>
        );
    }
}

export default connect()(Restricted)