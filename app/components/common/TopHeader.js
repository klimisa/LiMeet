import React from 'react';
import { Link, Location } from 'react-router';
import { Dropdown } from 'react-bootstrap';
import { smoothlyMenu } from '../layouts/Helpers';

class TopHeader extends React.Component {

    toggleNavigation(e) {
        e.preventDefault();
        $("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }

    render() {
        return (
            <div className="row border-bottom">
                <nav className="navbar navbar-static-top white-bg" role="navigation" style={{marginBottom: 0}}>
                <div className="navbar-header">
                    <button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                        <i className="fa fa-reorder"></i>
                    </button>
                    <Link to="/" className="navbar-brand">Intralot</Link>
           
                    </div>
                    <ul className="nav navbar-top-links navbar-right">
                        <li>
                            <a href="#">
                                <i className="fa fa-sign-out"></i> Log out
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default TopHeader