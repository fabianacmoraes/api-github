import React, { Component } from "react";
import './navmenu.css'

export default class NavMenu extends Component {
  render() {
    return (
      <nav className="navMenu">
        <ul className="navMenu__lista">
          <li className="navMenu__item">
            <a className="navMenu__link" href="/">
              Usuários
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
