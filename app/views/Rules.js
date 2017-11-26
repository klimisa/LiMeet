import React, { Component } from 'react';

class Rules extends Component {

    render() {
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ibox">
                            <div className="ibox-content">
                                <div className="no-padding">
                                    <h2>General Rules</h2>
                                    <ul className="list-group">
                                        <li className="list-group-item">Absolute Meeting Budget: €1.000</li>
                                        <li className="list-group-item">No more than 50% of available for anyone</li>
                                        <li className="list-group-item">No more than 10% of available time for Devs</li>
                                    </ul>
                                    <h2>Budgetary Rules</h2>
                                    <ul className="list-group">
                                        <li className="list-group-item">While in Design, budget for Chile no more than €20.000</li>
                                        <li className="list-group-item">While in Dev, budget for Chile no more than €5.000</li>
                                        <li className="list-group-item">At kick-off, all budget for Chile is suspended</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Rules