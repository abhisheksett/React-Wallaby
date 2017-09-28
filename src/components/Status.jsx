
import React, { Component } from 'react';

class Status extends Component {

    render() {
        return <p className="status">Current Balance: {this.props.balance}</p>
    }
}

export default Status;