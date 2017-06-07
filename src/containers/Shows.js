import React, { Component } from 'react'
import { connect } from 'react-redux'

class Shows extends Component {

    render() {
        return (
            <div>
                <p> Shows </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
}

export default connect(mapStateToProps)(Shows)