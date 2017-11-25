import React, { Component } from 'react';

import moment from 'moment';

import { Button } from 'react-bootstrap';

import RichTextEditor from '../components/common/RichTextEditor';
import Dropdown from '../components/common/Dropdown';
import MultiDropdown from '../components/common/MultiDropdown';
import DatetimePicker from '../components/common/DatetimePicker';

import ProjectsData from '../data/Projects' 
import PeopleData from '../data/People' 
import ActionsData from '../data/Actions' 
import RoomsData from '../data/Rooms' 

import Roles from '../data/Roles'

class Organizer extends Component {
    constructor() {
        super();
        this.state = {
            organizers: [],
            participants: [],
            cost: 0,
            datetimeFrom: null,
            datetimeTo: null,
            meetinghr: 0
        }
        this.changeOrganizer = this.changeOrganizer.bind(this);
        this.changeParticipants = this.changeParticipants.bind(this);
        this.changeDatetimeFrom = this.changeDatetimeFrom.bind(this);
        this.changeDatetimeTo = this.changeDatetimeTo.bind(this);
    }

    calculateCost(organizers, participants) {
        const o = organizers.reduce((acc, p)=> acc + Roles.find(r => r.role === p.role)["rate"], 0);
        const p = participants.reduce((acc, p)=> acc + Roles.find(r => r.role === p.role)["rate"], 0);
       return o + p;
    }

    calculateHours(datetimeFrom, datetimeTo) {
        if(datetimeFrom && datetimeTo) {
            return moment.duration(datetimeTo.diff(datetimeFrom)).asHours();
        }
        return 0
    }

    changeDatetimeFrom(newDatetime) {
        this.setState((prevState) => ({datetimeFrom: newDatetime, meetinghr: this.calculateHours(newDatetime, prevState.datetimeTo)}));
    }

    changeDatetimeTo(newDatetime) {
        this.setState((prevState) => ({datetimeTo: newDatetime, meetinghr: this.calculateHours(prevState.datetimeFrom, newDatetime)}));
    }

    changeOrganizer({value, label}) {
        this.setState((prevState) => {
            const organizers = [PeopleData.find(p => p.name === value)];
            const cost = this.calculateCost(organizers, prevState.participants)
            return {organizers, cost}
        });
    }

    changeParticipants(parts) {
        this.setState((prevState) => {
            const participants = parts.map(part => PeopleData.find(p => p.name === part.value));
            const cost = this.calculateCost(prevState.organizers, participants);
            return {participants, cost}
        }); 
    }

    render() {
        const mapProjects = (projects) => projects.map(x => ({ value: x.project_name, label: `${x.project_name} - ${x.description}`}));
        const mapPeople = (people) => people.map(x => ({ value: x.name, label: x.name}));
        const mapActions = (actions) => actions.map(x => ({ value: x.name, label: x.name}));
        const mapRooms = (rooms) => rooms.map(x => ({ value: x.name, label: x.name}));
        const cost = (this.state.cost * this.state.meetinghr);
        const overBudget = cost > 1000;
        const classNameOverBudget = overBudget ? 'text-danger' : '';
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                           <div className="row">
                <div className="col-lg-12">
                
                    <div className="tabs-container">
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#tab-1"> Meeting</a></li>
                            </ul>
                            <div className="tab-content">
                                <div id="tab-1" className="tab-pane active">
                                    <div className="panel-body">
                                        <div className="text-right">
                                            <h1 className={classNameOverBudget}>{`${this.state.meetinghr} hr = €${cost.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')} `}</h1>
                                            <span className={classNameOverBudget}>{overBudget ? '* total budget restriction rule violated' : ''}</span>
                                        </div>
                                        <fieldset className="form-horizontal">
                                        <div className="form-group">
                                                <label className="col-sm-2 control-label">Date from:</label>
                                                <div className="col-sm-10">
                                                    <div className="input-group date">
                                                        <DatetimePicker onChange={this.changeDatetimeFrom} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-sm-2 control-label">Date to:</label>
                                                <div className="col-sm-10">
                                                    <div className="input-group date">
                                                        <DatetimePicker onChange={this.changeDatetimeTo} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-sm-2 control-label">Organizer:</label>
                                                <div className="col-sm-10">
                                                   <Dropdown name={"people"} multi={true} options={mapPeople(PeopleData)} onChange={this.changeOrganizer} />
                                                </div>
                                            </div>
                                            <div className="form-group"><label className="col-sm-2 control-label">Participants:</label>
                                                <div className="col-sm-10">
                                                    <MultiDropdown name={"participants"} options={mapPeople(PeopleData)} onChange={this.changeParticipants}/>
                                                </div>
                                            </div>
                                            

                                            <div className="form-group"><label className="col-sm-2 control-label">Project:</label>
                                                <div className="col-sm-10">
                                                   <Dropdown name={"project"} options={mapProjects(ProjectsData)} />
                                                </div>
                                            </div>

                                            <div className="form-group"><label className="col-sm-2 control-label">Actions:</label>
                                                <div className="col-sm-10">
                                                    <Dropdown name={"actions"} multi={true} options={mapActions(ActionsData)} />
                                                </div>
                                            </div>
                                            <div className="form-group"><label className="col-sm-2 control-label">Location:</label>
                                                <div className="col-sm-10">
                                                    <Dropdown name={"rooms"} multi={true} options={mapRooms(RoomsData)} />
                                                </div>
                                            </div>
                                            <div className="form-group"><label className="col-sm-2 control-label">Agenta:</label>
                                                <div className="col-sm-10">
                                                    <div className="summernote">
                                                        <RichTextEditor />
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>

                                        <Button bsStyle={`${overBudget ? 'danger' : 'primary'} pull-right`} disabled={overBudget ? 'disabled' : ''}>Submit</Button>
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

export default Organizer