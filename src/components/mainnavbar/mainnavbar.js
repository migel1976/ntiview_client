import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Form,FormControl,Button} from 'react-bootstrap';

const MainNavbar=()=>{
	return(
	<div>
      <header>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Brand href="#home">NTIView client</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
				  <Nav.Link>
					  <NavLink to='/'>Real Time  Data</NavLink>
		          </Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
	</div>
	)
};

export default MainNavbar;
