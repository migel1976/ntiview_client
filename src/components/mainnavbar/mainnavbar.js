import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Form,FormControl,Button} from 'react-bootstrap';

import OrderModalContainer from '../main-panel/algo-orders-panel/order-modal/order-modal-container';
import GraphModalContainer from '../main-panel/algo-orders-panel/graph-modal/graph-modal-container';
import style from './mainnavbar.module.css';

const MainNavbar=(props)=>{

	// debugger;
	const openModal=()=>{
		props.setOrderShowModal(true);
	};

	return(
	<div className={style.navbar}>
		<OrderModalContainer 
			algoman_rop={props.algoman_rop}	
		/>
		{/*<GraphModalContainer />*/}
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
					<NavDropdown.Item onClick={openModal}>Place Test Order(s)</NavDropdown.Item>
					<NavDropdown.Item href='/'>Cancel Order(s)</NavDropdown.Item>
				  </NavDropdown>
				  <NavDropdown title='Postion' id='collasible-nav-dropdown'>
					<NavDropdown.Item href='/'>Some action</NavDropdown.Item>
				  </NavDropdown>
                </Nav>
		  </Navbar.Collapse>
			<span style={{color:'white'}}>{props.ts}</span>
        </Navbar>
      </header>
	</div>
	)
};

export default MainNavbar;
