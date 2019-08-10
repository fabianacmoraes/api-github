import React, { Component } from 'react'

import Usuario from '../Usuario';
import './busca.css'

class Busca extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            users: [
                {
                    avatar_url: '',
                    login: ''
                }
            ]
        }
        this.buscarUsuario = this.buscarUsuario.bind(this)
    }

    buscarUsuario(event) {
        event.preventDefault();
        const username = this.state.username;

        fetch(`https://api.github.com/search/users?q=${username}`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    username: '',
                    users: responseJson.items,
                })
            })
    }

    render() {
        return (
            <div className="busca container">
                <div>
                    <form onSubmit={this.buscarUsuario}>
                        <input value={this.state.username} onChange={(event) => this.setState({ username: event.target.value })} type="search" />
                        <button type="submit">Buscar</button>
                    </form>
                </div>
                <div>
                    <div className="usuarioArea">
                        {this.state.users.length === 0
                            ? <div></div> : ''
                        }
                        {
                            this.state.users.map(user =>
                                <Usuario user={user} />
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Busca