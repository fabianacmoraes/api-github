import React, { Component, Fragment } from 'react';
import Cabecalho from '../../components/Cabecalho';
import NavMenu from '../../components/NavMenu'
import Widget from '../../components/Widget'
import Usuario from '../../components/Usuario';
import Busca from '../../components/Busca';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Cabecalho>
          <NavMenu />
        </Cabecalho>
        <Widget>
          <Busca />
        </Widget>
      </Fragment>
    );
  }
}

export default Home;
