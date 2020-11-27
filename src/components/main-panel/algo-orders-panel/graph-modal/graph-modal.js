import React,{useState} from 'react';
import {Button, Modal, InputGroup, FormControl} from 'react-bootstrap';
// import FormModal from './form-modal';

export const GraphModal=(props)=>{
	debugger;
	var row=props.row.aoid;
	var row1=props.row.ticker;
	var row1=props.row.aosize;
	// var row=props.row.aoid;
	// var row=props.row.aoid;
	// debugger;
	// var elements=props.selectionorder;
	// var id=elements[0];
	// var objectID=props.rowsorder[id];
	// console.log('ObjectID',objectID);
	
	return(
			<Modal show={props.show} onHide={props.show} >
			  <Modal.Header>
				<Modal.Title>Graph current row</Modal.Title>
			  </Modal.Header>
			  <Modal.Body>
				Hello from row number
				{row}
				{row1}
			  </Modal.Body>
			  <Modal.Footer>
				<Button variant="secondary" onClick={props.closeForm}>Close</Button>
				{/*<Button variant="primary" onClick={props.saveForm}>Save changes</Button>*/}
			  </Modal.Footer>
			</Modal>
	)
};

