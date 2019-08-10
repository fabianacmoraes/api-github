import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home';
import Perfil from './pages/Perfil';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/perfil" component={Perfil} />
                {/* <Route path="*" component={ () => (<div>Página 404</div>) } /> */}
            </Switch>
        )
    }
}