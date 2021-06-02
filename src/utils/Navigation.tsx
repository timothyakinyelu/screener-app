import React, { Fragment } from 'react';
import notificationBell from '../static/images/bell.svg';
import '../static/css/navigation.css';

const HomeNavigation: React.FC = (): JSX.Element => {
    return (
        <Fragment>
            <div className="appHeader bg-primary text-light">
                <div className="left">
                    <a href="#" className="headerButton" data-bs-toggle="modal" data-bs-target="#sidebarPanel"></a>
                </div>
                <div className="pageTitle">BoringTrader</div>
                <div className="right">
                    <a href="app-notifications.html" className="headerButton">
                        <img src={notificationBell} alt="image" className="imaged w20" />
                        <span className="badge badge-danger">4</span>
                    </a>
                    <a href="app-settings.html" className="headerButton">
                        <svg className="svg-icon" width="20" height="20" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M10,10.9c2.373,0,4.303-1.932,4.303-4.306c0-2.372-1.93-4.302-4.303-4.302S5.696,4.223,5.696,6.594C5.696,8.969,7.627,10.9,10,10.9z M10,3.331c1.801,0,3.266,1.463,3.266,3.263c0,1.802-1.465,3.267-3.266,3.267c-1.8,0-3.265-1.465-3.265-3.267C6.735,4.794,8.2,3.331,10,3.331z"
                            />
                            <path
                                fillRule="evenodd"
                                d="M10,12.503c-4.418,0-7.878,2.058-7.878,4.685c0,0.288,0.231,0.52,0.52,0.52c0.287,0,0.519-0.231,0.519-0.52c0-1.976,3.132-3.646,6.84-3.646c3.707,0,6.838,1.671,6.838,3.646c0,0.288,0.234,0.52,0.521,0.52s0.52-0.231,0.52-0.52C17.879,14.561,14.418,12.503,10,12.503z"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </Fragment>
    );
};

const AppNavigation: React.FC = (): JSX.Element => {
    return (
        <Fragment>
            <div className="appHeader">
                <div className="left">
                    <a href="#" className="headerButton goBack"></a>
                </div>
                <div className="pageTitle">Components</div>
                <div className="right"></div>
            </div>
        </Fragment>
    );
};

export { HomeNavigation, AppNavigation };
