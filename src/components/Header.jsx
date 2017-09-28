
import React, { Component } from 'react';
import wallet from '../img/wallet.png'


class Header extends Component {

    render() {
        return (
            <header>
                <img src={wallet} alt="Wallet" id="logo" />
                <h1 className="title">Wallaby</h1>
          </header>
        )
    }
}

export default Header;