import React, { Component } from "react";

import '../../public/vendor/flot/jquery.flot.js'
import '../../public/vendor/flot/jquery.flot.tooltip.min.js'
import '../../public/vendor/flot/jquery.flot.spline.js'
import '../../public/vendor/flot/jquery.flot.resize.js'
import '../../public/vendor/flot/jquery.flot.pie.js'
import '../../public/vendor/flot/jquery.flot.symbol.js'
import '../../public/vendor/flot/jquery.flot.time.js'

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
    }
    render() {
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="ibox float-e-margins">
                                <div className="ibox-title">
                                    <span className="label label-success pull-right">
                                        Monthly
                                    </span>
                                    <h5>Cost</h5>
                                </div>
                                <div className="ibox-content">
                                    <h1 className="no-margins">€1.920</h1>
                                    <div className="stat-percent font-bold text-danger">
                                        20% <i className="fa fa-level-up" />
                                    </div>
                                    <small>Money Spend</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="ibox float-e-margins">
                                <div className="ibox-title">
                                    <span className="label label-success pull-right">
                                        Monthly
                                    </span>
                                    <h5>Hours</h5>
                                </div>
                                <div className="ibox-content">
                                    <h1 className="no-margins">48 hr</h1>
                                    <div className="stat-percent font-bold text-danger">
                                        20% <i className="fa fa-level-up" />
                                    </div>
                                    <small>Time Elapsed</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="ibox float-e-margins">
                                <div className="ibox-title">
                                    <span className="label label-primary pull-right">
                                        Today
                                    </span>
                                    <h5>Meetings</h5>
                                </div>
                                <div className="ibox-content">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h1 className="no-margins">
                                                €1.920
                                            </h1>
                                            <div className="font-bold text-navy">
                                                44%{" "}
                                                <i className="fa fa-level-up" />{" "}
                                                <small>Rapid pace</small>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h1 className="no-margins">
                                                30 hr
                                            </h1>
                                            <div className="font-bold text-navy">
                                                22%{" "}
                                                <i className="fa fa-level-up" />{" "}
                                                <small>Slow pace</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="ibox float-e-margins">
                                <div className="ibox-title">
                                    <h5>Monthly income</h5>
                                    <div className="ibox-tools">
                                        <span className="label label-primary">
                                            Updated 12.2015
                                        </span>
                                    </div>
                                </div>
                                <div className="ibox-content no-padding">
                                    <div
                                        className="flot-chart m-t-lg"
                                        style={{ height: "55px" }}
                                    >
                                        <div
                                            className="flot-chart-content"
                                            id="flot-chart1"
                                        />
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
                </div>
            </div>
        );
    }
}

export default Dashboard;
