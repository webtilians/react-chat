import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>BIENVENIDO ... {this.props.user}</h2>
                
                    </div>
                
                </div>
                );
    }
}

export default Header;
