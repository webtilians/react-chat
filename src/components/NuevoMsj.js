import React, { Component } from 'react';

import '../App.css';

class NuevoMsj extends Component {
    constructor(props) {
        super(props);
        this.enviarMsg.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            valuetxt: ''
        };
    }
    handleChange = (e) => {
        this.setState({valuetxt: e.target.value});
    }
    enviarMsg = () => {
        this.setState({valuetxt: ''})
        this.props.enviarMensaje(this.state.valuetxt)
    }
    render() {
        console.log(this.props.disabledBtn, "disabledBttb")
        return (
                <div className="nuevoMsj">
                    <textarea
                        onChange={this.handleChange}
                        value={this.state.valuetxt} />
                    <button disabled={this.props.disabledBtn} onClick={() => this.enviarMsg()} className="btnEnviar"></button>
                </div>
                );
    }
}

export default NuevoMsj;
