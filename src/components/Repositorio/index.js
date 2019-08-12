import React, { Component } from "react";
import { toLower } from "ramda";

import arrayUtils from "../../utils/array";
import "./repositorio.css";

class Repositorio extends Component {
  constructor(props) {
    super();
    this.state = {
      user: props.user,
      repos: [],
      keys: [
        {
          name: "name",
          order: "asc",
          priority: 0
        },
        {
          name: "stargazers_count",
          order: "asc",
          priority: 1
        }
      ]
    };
  }

  parseReposNameToLower(arr) {
    arr.forEach(obj => {
      obj.name = toLower(obj.name);
    });
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
        this.parseReposNameToLower(repos);
        const keysByPriority = arrayUtils.sortByKey(
          this.state.keys,
          "priority"
        );
        this.setState({
          repos: arrayUtils.sortByKeys(repos, keysByPriority)
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
