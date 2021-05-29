import React from 'react'
import { Switch, Route } from 'react-router-dom'
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
                </Switch>
            </div>
        </div>
    )
}

export default Routes;