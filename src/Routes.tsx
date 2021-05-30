import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './pages/cryptocurrency/Dashboard';
import Home from './pages/Home';
import Footer from './utils/Footer';
import { MainRoutes } from './__url__';

const Routes: React.FC = (): JSX.Element => {
    return (
        <Fragment>
            <div className="appWrapper max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:container md:mx-auto sm:container sm:mx-auto">
                    <div className="md:flex">
                        <Switch>
                            <Route exact path={`${MainRoutes.home}`} component={Home} />
                            <Route exact path={`${MainRoutes.crypto_screener_dashboard}`} component={Dashboard} />
                        </Switch>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default Routes;
