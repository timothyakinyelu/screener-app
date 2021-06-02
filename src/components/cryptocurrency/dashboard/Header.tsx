import React, { Fragment } from 'react';
import '../../../static/css/cryptocurrency/crypto-header.css';
import imgAnalytics from '../../../static/images/undraw_crypto_portfolio_2jy5.svg';

const Header: React.FC = () => {
    return (
        <Fragment>
            <div className="section wallet-card-section pt-1">
                <div className="wallet-card">
                    <div className="balance">
                        <div className="left">
                            <h1 className="page-name">Cryptocurrency</h1>
                            <span className="title">Global Market Cap</span>
                            <h1 className="total">$ 9,562,030,376,323.50</h1>
                        </div>
                        <div className="right">
                            <a href="#" className="button" data-bs-toggle="modal" data-bs-target="#depositActionSheet">
                                <div className="icon-inner">
                                    <img src={imgAnalytics} alt="undraw_analytics" srcSet={imgAnalytics} />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="wallet-footer">
                        <div className="grid grid-cols-4 gap-4">
                            <h4 className="col-span-4">Top Gainers</h4>
                            <div className="item">
                                <a href="#" data-bs-toggle="modal" data-bs-target="#withdrawActionSheet">
                                    <div className="icon-wrapper bg-danger">
                                        {/* <ion-icon name="arrow-down-outline" role="img" class="md hydrated" aria-label="arrow down outline"></ion-icon> */}
                                        3.75%
                                    </div>
                                    <strong>BTC</strong>
                                </a>
                            </div>
                            <div className="item">
                                <a href="#" data-bs-toggle="modal" data-bs-target="#sendActionSheet">
                                    <div className="icon-wrapper">
                                        {/* <ion-icon name="arrow-forward-outline" role="img" class="md hydrated" aria-label="arrow forward outline"></ion-icon> */}
                                        2.56%
                                    </div>
                                    <strong>ETH</strong>
                                </a>
                            </div>
                            <div className="item">
                                <a href="app-cards.html">
                                    <div className="icon-wrapper bg-success">
                                        {/* <ion-icon name="card-outline" role="img" class="md hydrated" aria-label="card outline"></ion-icon> */}
                                        0.87%
                                    </div>
                                    <strong>XRP</strong>
                                </a>
                            </div>
                            <div className="item">
                                <a href="#" data-bs-toggle="modal" data-bs-target="#exchangeActionSheet">
                                    <div className="icon-wrapper bg-warning">
                                        {/* <ion-icon name="swap-vertical" role="img" class="md hydrated" aria-label="swap vertical"></ion-icon> */}
                                        0.32%
                                    </div>
                                    <strong>DOGE</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Header;
