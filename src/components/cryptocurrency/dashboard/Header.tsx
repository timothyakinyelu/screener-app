import React, { Fragment } from 'react';
import '../../../static/css/header.css';

const Header: React.FC = () => {
    return (
        <Fragment>
            {/* <div className="kit0">
                <div className="headline-container">
                    <div className="row headline-row">
                        <div className="headline">
                            <div className="headline__title">
                                <h1>Cryptocurrency Indicators</h1>
                                <span className="headline__actions">
                                    <a
                                        className="btn btn--no-wave js-tooltip js-screener-load"
                                        href="/users/sign-up"
                                        data-tooltipped=""
                                        aria-describedby="tippy-tooltip-1355"
                                        data-original-title="Load saved screener configuration"
                                    >
                                        <div className="zmdi zmdi-download"></div>
                                        Load
                                    </a>
                                    <a
                                        className="btn btn--no-wave js-screener-save js-tooltip"
                                        data-target="#saveScreenerModal"
                                        href="/users/sign-up"
                                        data-tooltipped=""
                                        aria-describedby="tippy-tooltip-1356"
                                        data-original-title="Save this configuration<br>Setup alerts"
                                    >
                                        <div className="zmdi zmdi-upload"></div>
                                        Save
                                    </a>
                                    <a
                                        className="btn btn--no-wave js-screener-save js-tooltip"
                                        data-target="#createWatchlistModal"
                                        href="/users/sign-up"
                                        data-tooltipped=""
                                        aria-describedby="tippy-tooltip-1357"
                                        data-original-title="Create watchlist from the first 100 results"
                                    >
                                        <div className="zmdi zmdi-format-list-bulleted"></div>
                                        Create a watchlist
                                    </a>
                                    <a
                                        className="btn waves-effect"
                                        data-toggle="modal"
                                        data-target="#onboarding-modal-screener"
                                        href="#"
                                    >
                                        <i className="zmdi zmdi-help-outline"></i>
                                        Help
                                    </a>
                                </span>
                            </div>
                            <div className="headline__subtitle">&nbsp;</div>
                        </div>
                        <div className="doorkeeper--v2" id="doorkeeper">
                            <div>
                                <div className="doorkeeper notranslate">
                                    <div className="inner">
                                        <span
                                            className="doorkeeper-icon js-tooltip"
                                            data-offset="0"
                                            data-followcursor="false"
                                            data-position="bottom"
                                            data-delay="[1000, 100]"
                                            data-duration="100"
                                            data-animation="scale"
                                            data-arrow="true"
                                            data-tooltipped=""
                                            aria-describedby="tippy-tooltip-1358"
                                            data-original-title="Don't tell anyone, but<br/> you're my favorite."
                                        >
                                            <img
                                                src="https://wallmine.com/assets/static_assets/doorkeeper/closed-6d9eabc057a039faca6ee98db2d7a3dcb3204359cc4af54482c6379158a6e959.svg"
                                                alt="US markets are closed"
                                                className="doorkeeper-img doorkeeper-regular-img"
                                            />
                                            <img
                                                src="https://wallmine.com/assets/static_assets/doorkeeper/smile-0ed6cfcb00d0f67f13da9ec148468d0971a985fb4a4239870b101480157e2758.svg"
                                                alt=":)"
                                                className="doorkeeper-img doorkeeper-hover-img"
                                            />
                                        </span>
                                        <div className="text">
                                            <b>US markets are closed</b>
                                            Pre-market trading starts
                                            <time
                                                className="timeago"
                                                title="June 01 at 9:00 am "
                                                dateTime="2021-06-01T09:00:00+01:00"
                                                data-tid="28247"
                                            >
                                                in 2 days
                                            </time>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="appHeader">
                <div className="left">
                    <a href="#" className="headerButton goBack"></a>
                </div>
                <div className="pageTitle">Components</div>
                <div className="right"></div>
            </div>
            <div className="appHeader bg-primary text-light">
                <div className="left">
                    <a href="#" className="headerButton" data-bs-toggle="modal" data-bs-target="#sidebarPanel">
                        {/* <ion-icon name="menu-outline" role="img" class="md hydrated" aria-label="menu outline"></ion-icon> */}
                    </a>
                </div>
                <div className="pageTitle">
                    <img src="assets/img/logo.png" alt="logo" className="logo" />
                </div>
                <div className="right">
                    <a href="app-notifications.html" className="headerButton">
                        {/* <ion-icon class="icon md hydrated" name="notifications-outline" role="img" aria-label="notifications outline"></ion-icon> */}
                        <span className="badge badge-danger">4</span>
                    </a>
                    <a href="app-settings.html" className="headerButton">
                        <img src="assets/img/sample/avatar/avatar1.jpg" alt="image" className="imaged w32" />
                        <span className="badge badge-danger">6</span>
                    </a>
                </div>
            </div>
            <div className="section wallet-card-section pt-1">
                <div className="wallet-card">
                    <div className="balance">
                        <div className="left">
                            <span className="title">Total Balance</span>
                            <h1 className="total">$ 2,562.50</h1>
                        </div>
                        <div className="right">
                            <a href="#" className="button" data-bs-toggle="modal" data-bs-target="#depositActionSheet">
                                <div className="icon-inner">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        version="1.1"
                                        id="Layer_1"
                                        x="0px"
                                        y="0px"
                                        viewBox="-11 0 70 50"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M9.077,25.99h14v14c0,0.553,0.448,1,1,1s1-0.447,1-1v-14h14c0.552,0,1-0.447,1-1s-0.448-1-1-1h-14v-14c0-0.553-0.448-1-1-1  s-1,0.447-1,1v14h-14c-0.552,0-1,0.447-1,1S8.525,25.99,9.077,25.99z"
                                        />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="wallet-footer">
                        <div className="item">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#withdrawActionSheet">
                                <div className="icon-wrapper bg-danger">
                                    {/* <ion-icon name="arrow-down-outline" role="img" class="md hydrated" aria-label="arrow down outline"></ion-icon> */}
                                </div>
                                <strong>Withdraw</strong>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#sendActionSheet">
                                <div className="icon-wrapper">
                                    {/* <ion-icon name="arrow-forward-outline" role="img" class="md hydrated" aria-label="arrow forward outline"></ion-icon> */}
                                </div>
                                <strong>Send</strong>
                            </a>
                        </div>
                        <div className="item">
                            <a href="app-cards.html">
                                <div className="icon-wrapper bg-success">
                                    {/* <ion-icon name="card-outline" role="img" class="md hydrated" aria-label="card outline"></ion-icon> */}
                                </div>
                                <strong>Cards</strong>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#exchangeActionSheet">
                                <div className="icon-wrapper bg-warning">
                                    {/* <ion-icon name="swap-vertical" role="img" class="md hydrated" aria-label="swap vertical"></ion-icon> */}
                                </div>
                                <strong>Exchange</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Header;
