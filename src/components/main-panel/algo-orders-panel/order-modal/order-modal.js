import React,{useState} from 'react';
import {Button, Modal, InputGroup, FormControl} from 'react-bootstrap';
import FormModal from './form-modal';

export const OrderModal=(props)=>{
	// const close=()=>{
	// 	props.setOrderShowModal(false);
	// };
	
	const ticker_options=props.ticker.map(el=>(
		<option>
		 {el}
		</option>
	));
	
	// debugger;
	return(
			<Modal show={props.show} onHide={props.show} >
			  <Modal.Header>
				<Modal.Title>Place Test Order</Modal.Title>
			  </Modal.Header>
			  <Modal.Body>
				<FormModal
					ticker_options={ticker_options}
					changeSelectTicker={props.changeSelectTicker}
				/>
			  </Modal.Body>

			  <Modal.Footer>
				<Button variant="secondary" onClick={props.closeForm}>Close</Button>
				<Button variant="primary" onClick={props.saveForm}>Save changes</Button>
			  </Modal.Footer>
		    </Modal>
	)
};
