import React, { Component } from 'react';
import RichTextEditor from '../components/common/RichTextEditor';
import Dropdown from '../components/common/Dropdown';
import MultiDropdown from '../components/common/MultiDropdown';

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
            cost: 0
        }
        this.changeOrganizer = this.changeOrganizer.bind(this);
        this.changeParticipants = this.changeParticipants.bind(this);
    }

    calculateCost(organizers, participants) {
        const o = organizers.reduce((acc, p)=> acc + Roles.find(r => r.role === p.role)["rate"], 0);
        const p = participants.reduce((acc, p)=> acc + Roles.find(r => r.role === p.role)["rate"], 0);
       return o + p;
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
                                     <h1 className="text-right">€{this.state.cost.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</h1>
                                        <fieldset className="form-horizontal">
                                        <div className="form-group">
                                                <label className="col-sm-2 control-label">Date from:</label>
                                                <div className="col-sm-10">
                                                    <div className="input-group date">
                                                        <span className="input-group-addon">
                                                        <i className="fa fa-calendar"></i></span>
                                                        <input type="text" className="form-control" value="07/01/2014" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-sm-2 control-label">Date to:</label>
                                                <div className="col-sm-10">
                                                    <div className="input-group date">
                                                        <span className="input-group-addon">
                                                        <i className="fa fa-calendar"></i></span>
                                                        <input type="text" className="form-control" value="07/01/2014" />
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