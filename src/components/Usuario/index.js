import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './usuario.css'

class Usuario extends Component {

    constructor() {
        super()
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.user.login}`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson)
                this.setState({
                    user: responseJson,
                })
            })
    }

    render() {
        return (
            <article className="usuario">
                <div className="usuario__cabecalho">
                    <img className="usuario__fotoUsuario" src={this.state.user.avatar_url} alt="" />
                    <span className="usuario__nomeUsuario">{this.state.user.login}</span>
                </div>
                {/* <p className="usuario__conteudo">{this.state.user.bio}</p>
                <div className="usuario__infos">
                    <p>{this.state.user.followers}</p>
                    <p>{this.state.user.following}</p>
                </div> */}
            </article>
        )
    }
}

Usuario.propTypes = {
    user: PropTypes.shape({
        login: PropTypes.string.isRequired
    })
};

export default Usuario