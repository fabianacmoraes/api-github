import React, { Component } from 'react'
import './repositorio.css'

class Repositorio extends Component {
    render() {
        return (
            <div className="perfil container">
                <article className="perfil">
                    <div className="perfil__cabecalho">
                        <img className="perfil__fotoUsuario" src="" alt="" />
                        <span className="perfil__nomeUsuario">Nome</span>
                        <p className="perfil__bioUsuario">bio</p>
                        <p className="perfil__followersUsuario">Followers: <span>10</span></p>
                        <p className="perfil_followingUsuario">Following: <span>20</span></p>
                    </div>
                </article>

                <div className="perfil__listaRepositorios">
                    <div className="perfil__itemRepositorio">
                        <p className="perfil__nomeRepositorio"><a href="/">Nome do repositório (com link do repositório no github)</a></p>
                        <p className="perfil__descricaoRepositorio">Descrição do repositório</p>
                        <p className="perfil__startsRepositorio">Starts: <span>10</span></p>
                    </div>
                    
                    <div className="perfil__itemRepositorio">
                        <p className="perfil__nomeRepositorio"><a href="/">Nome do repositório (com link do repositório no github)</a></p>
                        <p className="perfil__descricaoRepositorio">Descrição do repositório</p>
                        <p className="perfil__startsRepositorio">Starts: <span>10</span></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Repositorio