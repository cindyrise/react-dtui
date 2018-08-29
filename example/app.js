
import React from 'react';
import ReactDOM from 'react-dom';
import {
    Switch,
    HashRouter as Router,
    Route
} from 'react-router-dom';
import './style.scss';
import'../release/dist/roo-bat.min.css';
import routes from './router';

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
