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
            <nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
                <a class="navbar-brand" href="/#">Top Projects by ROI<img class="top-header-icon" src={image2} alt='...' /></a>
                <ul class="nav nav-pills">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle all-time-link" data-bs-toggle="dropdown" href="/#" role="button" aria-expanded="false">All Time</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                            <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>

            {/* nav end */}

            {/*  */}
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2 icon-col">
                        <img class="crypto-icon" src={image1} alt='...' />
                    </div>
                    <div class="col-md-7 bars">
                        <p class="crypto-name">
                            Ethereum<span class="crypto-multiple m1">5950.00x</span>
                        </p>
                        <div class="dashes">
                            <div class="guage g1">
                                <div class="gradient"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 price-tag">
                        <table>
                            <tr>
                                <td class="price">Price</td>
                            </tr>
                            <tr>
                                <td>$1844...</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2 icon-col">
                        <img class="crypto-icon" src={image1} alt='...' />
                    </div>
                    <div class="col-md-7 bars">
                        <p class="crypto-name">
                            BNB<span class="crypto-multiple">1770.00x</span>
                        </p>
                        <div class="dashes">
                            <div class="guage g2">
                                <div class="gradient"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 price-tag">
                        <table>
                            <tr>
                                <td class="price">Price</td>
                            </tr>
                            <tr>
                                <td>$264....</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2 icon-col">
                        <img class="crypto-icon" src={image1} alt='...' />
                    </div>
                    <div class="col-md-7 bars">
                        <p class="crypto-name">
                            Polygon<span class="crypto-multiple">295.00x</span>
                        </p>
                        <div class="dashes">
                            <div class="guage g3">
                                <div class="gradient"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 price-tag">
                        <table>
                            <tr>
                                <td class="price">Price</td>
                            </tr>
                            <tr>
                                <td>$0.777</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2 icon-col">
                        <img class="crypto-icon" src={image1} alt='...' />
                    </div>
                    <div class="col-md-7 bars">
                        <p class="crypto-name">
                            Cardano<span class="crypto-multiple">121.00x</span>
                        </p>
                        <div class="dashes">
                            <div class="guage g4">
                                <div class="gradient"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 price-tag">
                        <table>
                            <tr>
                                <td class="price">Price</td>
                            </tr>
                            <tr>
                                <td>$0.327</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2 icon-col">
                        <img class="crypto-icon" src={image1} alt='...' />
                    </div>
                    <div class="col-md-7 bars">
                        <p class="crypto-name">
                            Quant<span class="crypto-multiple">101.00x</span>
                        </p>
                        <div class="dashes">
                            <div class="guage g5">
                                <div class="gradient"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 price-tag">
                        <table>
                            <tr>
                                <td class="price">Price</td>
                            </tr>
                            <tr>
                                <td>$111.4...</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2 icon-col">
                        <img class="crypto-icon" src={image1} alt='...' />
                    </div>
                    <div class="col-md-7 bars">
                        <p class="crypto-name">
                            Cosmos<span class="crypto-multiple">95.70x</span>
                        </p>
                        <div class="dashes">
                            <div class="guage g6">
                                <div class="gradient"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 price-tag">
                        <table>
                            <tr>
                                <td class="price">Price</td>
                            </tr>
                            <tr>
                                <td>$9.570</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2 icon-col">
                        <img class="crypto-icon" src={image1} alt='...' />
                    </div>
                    <div class="col-md-7 bars">
                        <p class="crypto-name">
                            Solana<span class="crypto-multiple">85.30x</span>
                        </p>
                        <div class="dashes">
                            <div class="guage g7">
                                <div class="gradient"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 price-tag">
                        <table>
                            <tr>
                                <td class="price">Price</td>
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