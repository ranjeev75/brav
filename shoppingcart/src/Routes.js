import React from 'react';
import { Router, Route, IndexRoute} from 'react-router';
import Main from './Main.js';
import App from './App.js';
import Bag from './Bag.js';
import NotFound from './404.js';

export default function Routes(props){
    return (
        <Router {...props}>
            <Route path='/' component={Main}>
                <IndexRoute component={App} />
                <Route path='/shoppingbag' component={Bag} />
                <Route path='*' component={NotFound} />
            </Route>
        </Router>
    )
}