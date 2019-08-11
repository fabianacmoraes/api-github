import React, { Component, Fragment } from 'react';
import Cabecalho from '../../components/Cabecalho'
import NavMenu from '../../components/NavMenu'
import Widget from '../../components/Widget'
import Repositorio from '../../components/Repositorio'

class Perfil extends Component {
  render() {
    return (
      <Fragment>
        <Cabecalho>
          <NavMenu />
        </Cabecalho>
        <Widget>
          <Repositorio/>
        </Widget>
      </Fragment>
    );
  }
}

export default Perfil;
