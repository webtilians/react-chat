import React, { Component } from 'react';
import '../App.css';

class Usuarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: this.props.usuarios
        };
    }
    render() {
        return (
                <div className="boxContactos">
                    gente en la sala :
                    <ul className="contactos">
                        {this.props.usuarios.map((item, i) => (
                                                <li key={i}>{item}</li>
                                                ))}
                    </ul>
                </div>

                );
    }
}

export default Usuarios;
