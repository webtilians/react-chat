import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
        import Main from './components/Main.js'
        import socket from 'socket.io-client'
        let sock = socket('http://vps404358.ovh.net:4457');
let id
import Modal from 'react-modal'
        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)'
            }
        };
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            usuarios: [],
            mensajes: [],
            disabledBtn: false,
            modalIsOpen: true,
            valueModal: '',
            sala: 'general'
        };
        this.changeInput = this.changeInput.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    componentDidMount() {
        id = Math.floor((Math.random() * 9999999) + 1);
        let that = this
        let mensajes = this.state.mensajes
        let usuarios = this.state.usuarios
        sock.on('mensajesNuevos', (datos) => {
            mensajes.push(datos)
            console.log(mensajes, "mensajesNuevos")
            this.setState({mensajes: mensajes})
        })
        sock.on('resNuevoUsuario', (data) => {
           console.log(data, "usuarios sala")
            //concatenar dos arrays el del servidor y el del estado
            that.setState({usuarios: data.aGente})
        })
    }

    closeModal() {
        if (this.state.user === "") {
            alert("introduzca un alias")
        } else {
            let users = this.state.usuarios
            users.push(this.state.user)
            this.setState({modalIsOpen: false});
            sock.emit('newUser', {user: this.state.user,sala:"general"})
        }

    }
    enviarMensaje = (msg) => {
        console.log(msg)
        let amsg = msg.split(" ");
        if (amsg[0] === "/join") {
            console.log(amsg[1])
            sock.emit('cambiarSala',{sala:amsg[1]} )
        } else {
            sock.emit('enviarMensaje', {mensajeDe: this.state.user, msg: msg, room: this.state.sala})
            let mensajes = this.state.mensajes
             mensajes.push({mensajeDe: this.state.user, msg: msg, room: this.state.sala})
             this.setState({mensajes:mensajes})
        }

    }
    changeInput = (event) => {
        this.setState({user: event.target.value})
    }
    render() {
        return (
                <div>
                    <Modal  isOpen={this.state.modalIsOpen}
                            style={customStyles}
                            contentLabel="Example Modal"> 
                        <h2 ref={subtitle => this.subtitle = subtitle}>Chatea con react</h2>
                        <div>Introduzca su apodo</div>
                        <input value={this.state.user} onChange={this.changeInput}/>
                        <input type="color"/>
                        <button onClick={this.closeModal}>enviar</button>
                    </Modal>
                    <Header changeBtn={this.changeBtn} user={this.state.user}/>
                    <Main
                        usuarios={this.state.usuarios}
                        enviarMensaje={this.enviarMensaje}
                        mensajes={this.state.mensajes}
                        disabledBtn={this.state.disabledBtn}
                        />
                </div>
                );
    }
}

export default App;
