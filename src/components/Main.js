import React, { Component } from 'react';
import '../App.css';
import Usuarios from './Usuarios.js';

import NuevoMsj from './NuevoMsj'

        class Main extends Component {

    render() {
        const historialMensajes = this.props.mensajes
        const listaMensajes = historialMensajes.map((mensaje, i) => {
            return(
                    <li key={i}>
                    
                        <a>{mensaje.msg}</a>
                    </li>
                    )
        })
        return (
                <div className="App">
                    <div className="App-main">
                        <div className="boxMensajes">
                
                            <ul className="mensajes">
                                {listaMensajes}
                            </ul>
                        </div>
                        <Usuarios usuarios={this.props.usuarios}/>
                        <br/>
                
                    </div>
                    <NuevoMsj disabledBtn={this.props.disabledBtn} mensajes={this.props.mensajes} enviarMensaje={this.props.enviarMensaje}/>
                </div>
                );
    }
}

export default Main;
