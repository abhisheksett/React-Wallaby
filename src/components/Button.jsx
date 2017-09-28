
import React, { Component } from 'react';
import wallet from '../img/wallet.png'


class Button extends Component {

   
    render() {
        return (
            <button className={this.props.className} 
            onClick={this.props.click}>{this.props.children}</button>
        )
    }
}

export default Button;