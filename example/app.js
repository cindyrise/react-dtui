import React from 'react';
import ReactDOM from 'react-dom';
import {
    Switch,
    HashRouter as Router,
    Route,
    IndexRoute,
    Link
} from 'react-router-dom';
import Pages from './index';
import './style.scss';
import '../release/dist/roo-bat.css';
import 'babel-polyfill';

const {Home, Button
} = Pages;

const routes = [
    { path: '/', component: Home, exact: true },
    { path: '/button', component: Button }
];


const App = (props, context) =>
    (
        <Router>
            <Switch>
                {
                    routes.map(route => (
                        <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
                    ))
                }
            </Switch>
        </Router>
    );

ReactDOM.render(<App />, document.getElementById('container'));
