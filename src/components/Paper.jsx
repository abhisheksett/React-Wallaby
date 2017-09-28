
import React, { Component } from 'react';
import wallet from '../img/wallet.png'


class Paper extends Component {

    render() {
        return (
            <div className="paper">{this.props.children}</div>
        )
    }
}

export default Paper;