import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

export default function Roteamento() {
    return (
        <Switch>
            <PrivateRoute path="/" component={HomePage} exact />
            <Route path="/login" component={LoginPage} />
            <Route component={NotFoundPage} />
        </Switch>
    );
}

class PrivateRoute extends Component {
    isAutenticado = () => {
        if (localStorage.getItem('TOKEN')) {
            return true;
        }
        else {
            return false;
        }
    }

    render() {
        const { component: UsedComponent, ...propsRestantes } = this.props;

        if (this.isAutenticado()) {
            return <UsedComponent {...propsRestantes} />
        }
        else {
            return <Redirect to="/login" />
        }
    }
}