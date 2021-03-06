import React from 'react';
import { Provider } from 'react-redux';
import { store } from "../store";
import { ConnectedDashboard } from "./dashboard";
import { Router, Route } from 'react-router-dom';
import {history} from '../store/history';
import { ConnectedNavigation } from '../components/navigation'

export const Main = () => (
    <Router history={history}>
        <Provider store={store}>
            <div>
                <ConnectedNavigation />
                <h1>Daily Planner</h1>
                <Route
                    exact
                    path="/dashboard"
                    render={() => <ConnectedDashboard />}
                />
            </div>
        </Provider>
    </Router>
)
