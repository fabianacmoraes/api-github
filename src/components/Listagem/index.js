import React, { Component } from "react";

import Usuario from "../Usuario";

class Listagem extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  static getDerivedStateFromProps({ users }, state) {
    state = { users };
    return state;
  }

  render() {
    return (
      <div>
        {this.state.users && this.state.users.length > 0 ? (
          this.state.users.map(user => <Usuario user={user} key={user.login} />)
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Listagem;
