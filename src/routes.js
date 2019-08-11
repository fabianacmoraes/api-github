import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/perfil"
          render={props => <Perfil {...props} text="Teste" />}
        />
        {/* <Route path="*" component={ () => (<div>Página 404</div>) } /> */}
      </Switch>
    );
  }
}
