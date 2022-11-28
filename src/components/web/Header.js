import React from 'react';

import {
    Navbar,
    Container,
    // Nav,
    // NavDropdown,
    
} from 'react-bootstrap';

import { Link } from "react-router-dom";

function WebHeader()
{
    return (
        <React.Fragment>
            <Navbar collapseOnselect expand="lg" className="navbar-custom shadow-sm" fixed="top">
                <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold text-white"><i className="fa fa-code"></i> MY PORTFOLIO </Navbar.Brand>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}

export default WebHeader;

