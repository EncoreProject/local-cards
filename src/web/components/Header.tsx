import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {appName} from "common/constants/App";


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
            <div>User</div>            
          </Navbar.Collapse>
        </Navbar>
    </header>
)
export default Header;
