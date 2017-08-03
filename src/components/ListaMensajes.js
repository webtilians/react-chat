import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class ListaMensajes extends Component {
    render() {
        return (
                <div className="boxMensajes">
                    <ul className="mensajes">
                        {this.props.mensajes.map((item, i) => (
                                                <li key={i}>{item.mensajeDe}+____+{item.msj}</li>
                                        ))}
                    </ul>
                </div>
                );
    }
}

export default ListaMensajes;
