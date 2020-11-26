import React,{useState} from 'react';
import {Button, Modal, InputGroup, FormControl} from 'react-bootstrap';
// import FormModal from './form-modal';

export const GraphModal=(props)=>{
	
	return(
			<Modal show={props.show} onHide={props.show} >
			  <Modal.Header>
				<Modal.Title>Graph current row</Modal.Title>
			  </Modal.Header>
			  <Modal.Body>
				Hello from row number xxx
			  </Modal.Body>
			  <Modal.Footer>
				<Button variant="secondary" onClick={props.closeForm}>Close</Button>
				{/*<Button variant="primary" onClick={props.saveForm}>Save changes</Button>*/}
			  </Modal.Footer>
			</Modal>
	)
};

