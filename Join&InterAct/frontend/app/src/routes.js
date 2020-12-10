import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from './pages/main_page';
import ListView from './pages/list_view';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/list" component={ListView} />
                <Route path="message/{id}" />
            </Switch>
        </BrowserRouter>
    )
}