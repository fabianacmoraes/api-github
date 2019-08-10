import React, { Component, Fragment } from 'react';
import Cabecalho from '../../components/Cabecalho';
import NavMenu from '../../components/NavMenu'

class Perfil extends Component {
  render() {
    return (
      <Fragment>
        <Cabecalho>
          <NavMenu />
        </Cabecalho>
      </Fragment>
    );
  }
}

export default Perfil;
