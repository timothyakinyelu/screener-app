import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './pages/cryptocurrency/Dashboard'
import Home from './pages/Home'
import { MainRoutes } from './__url__'


const Routes: React.FC = (): JSX.Element => {
    return (
        <div className="appWrapper">
            <div className="container">
                <Switch>
                    <Route
                        exact
                        path={`${MainRoutes.home}`}
                        component={Home}
                    />
                    <Route
                        exact
                        path={`${MainRoutes.crypto_screener_dashboard}`}
                        component={Dashboard}
                    />
                </Switch>
            </div>
        </div>
    )
}

export default Routes;