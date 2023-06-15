import React from 'react';
// import { useState } from 'react';
import './dashboard.css';
import image1 from "../../assets/frame-717@2x.png";
import image2 from "../../assets/black-icon-setshareline.svg";


// import { Link } from "react-router-dom";


const Dashboard = () => {

    return (
        <div>
            {/* nav start */}
            <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
                <a className="navbar-brand" href="/#">Top Projects by ROI<img className="top-header-icon" src={image2} alt='...' /></a>
                <ul className="nav nav-pills">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle all-time-link" data-bs-toggle="dropdown" href="/#" role="button" aria-expanded="false">All Time</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                            <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>

            {/* nav end */}

            {/*  */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 icon-col">
                        <img className="crypto-icon" src={image1} alt='...' />
                    </div>
                    <div className="col-md-7 bars">
                        <p className="crypto-name">
                            Ethereum<span className="crypto-multiple m1">5950.00x</span>
                        </p>
                        <div className="dashes">
                            <div className="guage g1">
                                <div className="gradient"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 price-tag">
                        <table>
                            <tr>
                                <td className="price">Price</td>
                            </tr>
                            <tr>
                                <td>$1844...</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 icon-col">
                        <img className="crypto-icon" src={image1} alt='...' />
                    </div>
                    <div className="col-md-7 bars">
                        <p className="crypto-name">
                            BNB<span className="crypto-multiple">1770.00x</span>
                        </p>
                        <div className="dashes">
                            <div className="guage g2">
                                <div className="gradient"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 price-tag">
                        <table>
                            <tr>
                                <td className="price">Price</td>
                            </tr>
                            <tr>
                                <td>$264....</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 icon-col">
                        <img className="crypto-icon" src={image1} alt='...' />
                    </div>
                    <div className="col-md-7 bars">
                        <p className="crypto-name">
                            Polygon<span className="crypto-multiple">295.00x</span>
                        </p>
                        <div className="dashes">
                            <div className="guage g3">
                                <div className="gradient"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 price-tag">
                        <table>
                            <tr>
                                <td className="price">Price</td>
                            </tr>
                            <tr>
                                <td>$0.777</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 icon-col">
                        <img className="crypto-icon" src={image1} alt='...' />
                    </div>
                    <div className="col-md-7 bars">
                        <p className="crypto-name">
                            Cardano<span className="crypto-multiple">121.00x</span>
                        </p>
                        <div className="dashes">
                            <div className="guage g4">
                                <div className="gradient"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 price-tag">
                        <table>
                            <tr>
                                <td className="price">Price</td>
                            </tr>
                            <tr>
                                <td>$0.327</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 icon-col">
                        <img className="crypto-icon" src={image1} alt='...' />
                    </div>
                    <div className="col-md-7 bars">
                        <p className="crypto-name">
                            Quant<span className="crypto-multiple">101.00x</span>
                        </p>
                        <div className="dashes">
                            <div className="guage g5">
                                <div className="gradient"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 price-tag">
                        <table>
                            <tr>
                                <td className="price">Price</td>
                            </tr>
                            <tr>
                                <td>$111.4...</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 icon-col">
                        <img className="crypto-icon" src={image1} alt='...' />
                    </div>
                    <div className="col-md-7 bars">
                        <p className="crypto-name">
                            Cosmos<span className="crypto-multiple">95.70x</span>
                        </p>
                        <div className="dashes">
                            <div className="guage g6">
                                <div className="gradient"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 price-tag">
                        <table>
                            <tr>
                                <td className="price">Price</td>
                            </tr>
                            <tr>
                                <td>$9.570</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 icon-col">
                        <img className="crypto-icon" src={image1} alt='...' />
                    </div>
                    <div className="col-md-7 bars">
                        <p className="crypto-name">
                            Solana<span className="crypto-multiple">85.30x</span>
                        </p>
                        <div className="dashes">
                            <div className="guage g7">
                                <div className="gradient"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 price-tag">
                        <table>
                            <tr>
                                <td className="price">Price</td>
                            </tr>
                            <tr>
                                <td>$18.770</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            {/*  */}

        </div>
    )
}

export default Dashboard;