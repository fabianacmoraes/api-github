import React, { Component } from "react";

import "./busca.css";
import Listagem from "../Listagem";

class Busca extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      users: []
    };
    this.buscarUsuario = this.buscarUsuario.bind(this);
  }

  buscarUsuario(event) {
    event.preventDefault();
    const username = this.state.username;
    if (username && username.length > 0) {
      fetch(`https://api.github.com/search/users?q=${username}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(responseJson => {
          this.setState({
            username: "",
            users: responseJson.items
          });
        });
    }
  }

  render() {
    return (
      <div className="busca container">
        <div>
          <form onSubmit={this.buscarUsuario}>
            <input
              value={this.state.username}
              onChange={event =>
                this.setState({ username: event.target.value })
              }
              type="search"
            />
            <button type="submit">Buscar</button>
          </form>
        </div>
        <div>
          <div className="usuarioArea">
            <Listagem users={this.state.users} />
          </div>
        </div>
      </div>
    );
  }
}

export default Busca;
