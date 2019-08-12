import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";

import Cabecalho from "../../components/Cabecalho";
import NavMenu from "../../components/NavMenu";
import Widget from "../../components/Widget";
import Repositorio from "../../components/Repositorio";

class Perfil extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  render() {
    try {
      const { user } = this.props.location.state;
      return (
        <Fragment>
          <Cabecalho>
            <NavMenu />
          </Cabecalho>
          <Widget>
            <Repositorio user={user} />
          </Widget>
        </Fragment>
      );
    } catch (err) {
      return <Redirect to="/" />;
    }
  }
}

export default Perfil;
