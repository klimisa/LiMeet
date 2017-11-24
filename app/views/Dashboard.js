import React, { Component } from 'react';

class Dashboard extends Component {

    render() {
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="container">
                               <div className="row">
                <div className="col-md-2">
                    <div className="ibox float-e-margins">
                        <div className="ibox-title">
                            <span className="label label-success pull-right">Monthly</span>
                            <h5>Views</h5>
                        </div>
                        <div className="ibox-content">
                            <h1 className="no-margins">386,200</h1>
                            <div className="stat-percent font-bold text-success">98% <i className="fa fa-bolt"></i></div>
                            <small>Total views</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="ibox float-e-margins">
                        <div className="ibox-title">
                            <span className="label label-info pull-right">Annual</span>
                            <h5>Orders</h5>
                        </div>
                        <div className="ibox-content">
                                    <h1 className="no-margins">80,800</h1>
                                    <div className="stat-percent font-bold text-info">20% <i className="fa fa-level-up"></i></div>
                                    <small>New orders</small>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="ibox float-e-margins">
                        <div className="ibox-title">
                            <span className="label label-primary pull-right">Today</span>
                            <h5>visits</h5>
                        </div>
                        <div className="ibox-content">

                            <div className="row">
                                <div className="col-md-6">
                                    <h1 className="no-margins">$ 406,420</h1>
                                    <div className="font-bold text-navy">44% <i className="fa fa-level-up"></i> <small>Rapid pace</small></div>
                                </div>
                                <div className="col-md-6">
                                    <h1 className="no-margins">206,120</h1>
                                    <div className="font-bold text-navy">22% <i className="fa fa-level-up"></i> <small>Slow pace</small></div>
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
                                <span className="label label-primary">Updated 12.2015</span>
                            </div>
                        </div>
                        <div className="ibox-content no-padding">
                            <div className="flot-chart m-t-lg" style={{height: '55px'}}>
                                <div className="flot-chart-content" id="flot-chart1"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
                </div>
            </div>
        )
    }

}

export default Dashboard