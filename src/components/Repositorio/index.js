import React, { Component } from "react";

import "./repositorio.css";
import arrow from './down-arrow.png';

class Repositorio extends Component {
  constructor(props) {
    super();
    this.state = {
      user: props.user,
      repos: []
    };
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.state.user.login}/repos`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        const repos = responseJson;
        this.setState({
          repos
        });
      });
  }

  render() {
    return (
      <div className="perfil container">
        <article className="perfil">
          <div className="perfil__cabecalho">
            <img
              className="perfil__fotoUsuario"
              src={this.state.user.avatar_url}
              alt=""
            />
            <span className="perfil__nomeUsuario">{this.state.user.login}</span>
            <p className="perfil__bioUsuario">{this.state.user.bio}</p>
            <p className="perfil__followersUsuario">
              Followers: <span>{this.state.user.followers}</span>
            </p>
            <p className="perfil_followingUsuario">
              Following: <span>{this.state.user.following}</span>
            </p>
          </div>
        </article>
        
        <div className="perfil__repositoriosOrdenar">
            <p>Ordenar por:</p>
            <div className="perfil__alfabetoOrdenar">
                <p>A - Z</p>
                <img src={arrow} alt="Seta para ordenação alfabética" />
            </div>
            <div className="perfil__estrelasOrdenar">
                <p>Stars</p>
            </div>
        </div>

        <div className="perfil__listaRepositorios">
          {this.state.repos.map(repo => {
            return (
              <div className="perfil__itemRepositorio" key={repo.id}>
                <p className="perfil__nomeRepositorio">
                  <a href={repo.html_url}>{repo.name}</a>
                </p>
                <p className="perfil__descricaoRepositorio">
                  {repo.description}
                </p>
                <p className="perfil__startsRepositorio">
                  Stars: <span>{repo.stargazers_count}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Repositorio;