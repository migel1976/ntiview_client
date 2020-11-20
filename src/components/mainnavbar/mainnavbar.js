import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Form,FormControl,Button} from 'react-bootstrap';

const MainNavbar=()=>{
	return(
	<div>
      <header>
		<Navbar variant="dark" bg="primary" expand='lg'>
          <Navbar.Brand href="#home">NTIView</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
				  <NavDropdown title='File' id='collasible-nav-dropdown'>
					<NavDropdown.Item href='/'>Import targets</NavDropdown.Item>
				  </NavDropdown>
				  <NavDropdown title='Algo Order' id='collasible-nav-dropdown'>
					<NavDropdown.Item onClick={()=>alert('aloha')}>Place Test Order(s)</NavDropdown.Item>
					<NavDropdown.Item href='/'>Cancel Order(s)</NavDropdown.Item>
				  </NavDropdown>
				  <NavDropdown title='Postion' id='collasible-nav-dropdown'>
					<NavDropdown.Item href='/'>Some action</NavDropdown.Item>
				  </NavDropdown>
				  {/*<Nav.Link href='/'>Algoorders </Nav.Link>*/}
				  {/*<NavLink to='/'>Algoorders</NavLink>*/}
				  {/*<NavLink to='/'>Positions</NavLink>*/}

					{/*<div class="dropdown">*/}
					  {/*<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">*/}
						{/*File*/}
					  {/*</button>*/}
					  {/*<div class="dropdown-menu">*/}
						{/*<a class="dropdown-item" href="#">Import targets</a>*/}
					  {/*</div>*/}
					{/*</div>*/}
					{/*<div class="dropdown">*/}
					  {/*<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">*/}
						{/*AlgoOrders*/}
					  {/*</button>*/}
					  {/*<div class="dropdown-menu">*/}
						{/*<a class="dropdown-item" href="#">Place Test Orders</a>*/}
						{/*<a class="dropdown-item" href="#">Cancel Order(s)</a>*/}
					  {/*</div>*/}
					{/*</div>*/}
					{/*<div class="dropdown">*/}
					  {/*<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">*/}
						{/*Positions*/}
					  {/*</button>*/}
					  {/*<div class="dropdown-menu">*/}
						{/*<a class="dropdown-item" href="#">Some Action</a>*/}
					  {/*</div>*/}
					{/*</div>*/}
                </Nav>
		  </Navbar.Collapse>
        </Navbar>
      </header>
	</div>
	)
};

export default MainNavbar;
