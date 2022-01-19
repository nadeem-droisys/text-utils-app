import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Navbar2 extends Component {
    render() {
        return (
            <div>
                <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
            <div className="container-fluid">
                <link className="navbar-brand" to="/">NewsApp</link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <link className="nav-link" aria-current="page" to="/">Home</link>
                        </li>
                        
                        <li className="nav-item"><link className="nav-link" to="/business">Business</link></li>
                            <li className="nav-item"><link className="nav-link" to="/entertainment">Entertainment</link></li>
                            <li className="nav-item"><link className="nav-link" to="/health">Health</link></li>
                            <li className="nav-item"><link className="nav-link" to="/science">Science</link></li>
                            <li className="nav-item"><link className="nav-link" to="/sports">Sports</link></li>
                            <li className="nav-item"><link className="nav-link" to="/technology">Technology</link></li>
                    </ul>
                    <div className={`form-check form-switch text-dark`}>
                        <input className="form-check-input"  type="checkbox" id="flexSwitchCheckDefault"/>
                    </div>
                </div>
            </div>
        </nav>
            </div>
        )
    }
}

export default Navbar2
