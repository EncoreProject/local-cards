import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {appName} from "common/constants/App";
import Dropdown from "react-bootstrap/Dropdown";


const Header: React.FC = () => (
    <header>
        <Navbar
            expand="md"
            fixed="top"
            as="div"
        >
            <Navbar.Brand>{appName}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    <Navbar>
                        <Nav.Link href=".">Card List</Nav.Link>
                        <Nav.Link href=".">Deck List</Nav.Link>
                    </Navbar>
                </Nav>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar.Collapse>
        </Navbar>
    </header>
);
export default Header;
