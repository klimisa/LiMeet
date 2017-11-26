import React, { Component } from "react";

import '../../public/vendor/flot/jquery.flot.js';
import '../../public/vendor/flot/jquery.flot.tooltip.min.js';
import '../../public/vendor/flot/jquery.flot.spline.js';
import '../../public/vendor/flot/jquery.flot.resize.js';
import '../../public/vendor/flot/jquery.flot.pie.js';
import '../../public/vendor/flot/jquery.flot.symbol.js';
import '../../public/vendor/flot/jquery.flot.time.js';

import '../../public/vendor/c3/c3.min.css';
import c3 from '../../public/vendor/c3/c3.min.js';

import '../../public/vendor/d3/d3.min.js';

class Dashboard extends Component {
    componentDidMount() {
          var data2 = [
                [gd(2017, 11, 1), 7], [gd(2017, 11, 2), 6], [gd(2017, 11, 3), 4], [gd(2017, 11, 4), 8],
                [gd(2017, 11, 5), 9], [gd(2017, 11, 6), 7], [gd(2017, 11, 7), 5], [gd(2017, 11, 8), 4],
                [gd(2017, 11, 9), 7], [gd(2017, 11, 10), 8], [gd(2017, 11, 11), 9], [gd(2017, 11, 12), 6],
                [gd(2017, 11, 13), 4], [gd(2017, 11, 14), 5], [gd(2017, 11, 15), 11], [gd(2017, 11, 16), 8],
                [gd(2017, 11, 17), 8], [gd(2017, 11, 18), 11], [gd(2017, 11, 19), 11], [gd(2017, 11, 20), 6],
                [gd(2017, 11, 21), 6], [gd(2017, 11, 22), 8], [gd(2017, 11, 23), 11], [gd(2017, 11, 24), 13],
                [gd(2017, 11, 25), 7], [gd(2017, 11, 26), 9], [gd(2017, 11, 27), 9], [gd(2017, 11, 28), 8],
                [gd(2017, 11, 29), 5], [gd(2017, 11, 30), 8], [gd(2017, 11, 31), 25]
            ];

            var data3 = [
                [gd(2017, 11, 1), 800], [gd(2017, 11, 2), 500], [gd(2017, 11, 3), 600], [gd(2017, 11, 4), 700],
                [gd(2017, 11, 5), 500], [gd(2017, 11, 6), 456], [gd(2017, 11, 7), 800], [gd(2017, 11, 8), 589],
                [gd(2017, 11, 9), 467], [gd(2017, 11, 10), 876], [gd(2017, 11, 11), 689], [gd(2017, 11, 12), 700],
                [gd(2017, 11, 13), 500], [gd(2017, 11, 14), 600], [gd(2017, 11, 15), 700], [gd(2017, 11, 16), 786],
                [gd(2017, 11, 17), 345], [gd(2017, 11, 18), 888], [gd(2017, 11, 19), 888], [gd(2017, 11, 20), 888],
                [gd(2017, 11, 21), 987], [gd(2017, 11, 22), 444], [gd(2017, 11, 23), 999], [gd(2017, 11, 24), 567],
                [gd(2017, 11, 25), 786], [gd(2017, 11, 26), 666], [gd(2017, 11, 27), 888], [gd(2017, 11, 28), 900],
                [gd(2017, 11, 29), 178], [gd(2017, 11, 30), 555], [gd(2017, 11, 31), 993]
            ];

            var dataset = [
                {
                    label: "Number of hours",
                    data: data3,
                    color: "#1ab394",
                    bars: {
                        show: true,
                        align: "center",
                        barWidth: 24 * 60 * 60 * 600,
                        lineWidth:0
                    }

                }, {
                    label: "Money spend",
                    data: data2,
                    yaxis: 2,
                    color: "#1C84C6",
                    lines: {
                        lineWidth:1,
                            show: true,
                            fill: true,
                        fillColor: {
                            colors: [{
                                opacity: 0.2
                            }, {
                                opacity: 0.4
                            }]
                        }
                    },
                    splines: {
                        show: false,
                        tension: 0.6,
                        lineWidth: 1,
                        fill: 0.1
                    },
                }
            ];


            var options = {
                xaxis: {
                    mode: "time",
                    tickSize: [3, "day"],
                    tickLength: 0,
                    axisLabel: "Date",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Arial',
                    axisLabelPadding: 10,
                    color: "#d5d5d5"
                },
                yaxes: [{
                    position: "left",
                    max: 1070,
                    color: "#d5d5d5",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Arial',
                    axisLabelPadding: 3
                }, {
                    position: "right",
                    clolor: "#d5d5d5",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: ' Arial',
                    axisLabelPadding: 67
                }
                ],
                legend: {
                    noColumns: 1,
                    labelBoxBorderColor: "#000000",
                    position: "nw"
                },
                grid: {
                    hoverable: false,
                    borderWidth: 0
                }
            };

            function gd(year, month, day) {
                return new Date(year, month - 1, day).getTime();
            }

            var previousPoint = null, previousLabel = null;

            $.plot($("#flot-dashboard-chart"), dataset, options);

             c3.generate({
                bindto: '#slineChart',
                data:{
                    columns: [
                        ['Ohio', 10000, 8000, 7000, 4000],
                        ['Malta', 6000, 5500, 3000, 1000],
                        ['Marocco', 8000, 3000, 2000, 4500]
                    ],
                    colors:{
                        Ohio: '#1ab394',
                        Malta: '#B642F4',
                        Morocco: '#F4D742'
                    },
                    type: 'spline'
                }
            });

              c3.generate({
                bindto: '#pie',
                data:{
                    columns: [
                        ['Ohio', 27],
                        ['Montana', 7],
                        ['Chile', 30],
                        ['Malta', 13],
                        ['Morocco', 13]
                    ],
                    colors:{
                        Ohio: '#1ab394',
                        Montana: '#1C84C6',
                        Chile: '#F44268',
                        Malta: '#B642F4',
                        Morocco: '#F4D742'
                    },
                    type : 'pie'
                }
            });
    }
    render() {
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="container">
                <div className="row">
                        <div className="col-md-4">
                            <div className="ibox float-e-margins">
                                <div className="ibox-title">
                                    <span className="label label-primary pull-right">Today</span>
                                    <h5>Meetings</h5>
                                </div>
                                <div className="ibox-content">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h1 className="no-margins">€17.200</h1>
                                            <div className="font-bold text-danger">
                                                4%
                                                {" "}<i className="fa fa-level-up" />
                                                <small> Slow increase</small>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h1 className="no-margins">
                                                428 hr
                                            </h1>
                                            <div className="font-bold text-danger">
                                                3%
                                                {" "}<i className="fa fa-level-up" />
                                                <small> Slow increase</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="ibox float-e-margins">
                                <div className="ibox-title">
                                    <span className="label label-primary pull-right">Month</span>
                                    <h5>Meetings</h5>
                                </div>
                                <div className="ibox-content">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h1 className="no-margins">€351.450</h1>
                                            <div className="font-bold text-navy">
                                                6%
                                                {" "}<i className="fa fa-level-down" />
                                                <small> Small decrease</small>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h1 className="no-margins">
                                                8.784 hr
                                            </h1>
                                            <div className="font-bold text-navy">
                                                8%
                                                {" "}<i className="fa fa-level-down" />
                                                <small> Small decrease</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="ibox float-e-margins">
                                <div className="ibox-title">
                                    <span className="label label-primary pull-right">Year</span>
                                    <h5>Meetings</h5>
                                </div>
                                <div className="ibox-content">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h2 className="no-margins">€4.238.500</h2>
                                            <div className="font-bold text-navy">
                                                11%
                                                {" "}<i className="fa fa-level-down" />
                                                <small> Rapid decrease</small>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h2 className="no-margins">
                                                105.962 hr
                                            </h2>
                                            <div className="font-bold text-navy">
                                                14%
                                                {" "}<i className="fa fa-level-down" />
                                                <small> Rapid decrease</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                            <div className="row">
                    <div className="col-lg-12">
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <h5>Elapsed Time / Money Spend</h5>
                            </div>
                            <div className="ibox-content">
                                <div className="row">
                                <div className="col-lg-9">
                                    <div className="flot-chart">
                                        <div className="flot-chart-content" id="flot-dashboard-chart"></div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <ul className="stat-list">
                                        <li>
                                            <h2 className="no-margins">2,346</h2>
                                            <small>Total amount spend in period</small>
                                            <div className="stat-percent">48% <i className="fa fa-level-up text-navy"></i></div>
                                            <div className="progress progress-mini">
                                                <div style={{width: "48%"}} className="progress-bar"></div>
                                            </div>
                                        </li>
                                        <li>
                                            <h2 className="no-margins ">4,422</h2>
                                            <small>Hours spend in last month</small>
                                            <div className="stat-percent">60% <i className="fa fa-level-down text-navy"></i></div>
                                            <div className="progress progress-mini">
                                                <div style={{width: "60%"}} className="progress-bar"></div>
                                            </div>
                                        </li>
                                       </ul>
                                    </div>
                                </div>
                                </div>

                            </div>
                        </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="ibox float-e-margins">
                        <div className="ibox-title">
                            <h5>Time allocation per project</h5>
                        </div>
                        <div className="ibox-content">
                            <div>
                                <div id="pie"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="ibox float-e-margins">
                        <div className="ibox-title">
                            <h5>Project budget in period</h5>
                        </div>
                        <div className="ibox-content">
                            <div>
                                <div id="slineChart"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
