import {useState} from 'react';
import React,{Component} from 'react';
import {Button, Modal, InputGroup, FormControl} from 'react-bootstrap';
import PlotChart from './plot-chart';
// import FormModal from './form-modal';

// export const GraphModal=(props)=>{
export default class GraphModal extends Component{
	componentDidMount(){
		debugger;
		this.props.getGraphOrdersByAOID(this.props.row.aoid);
	};
	
	// var row=props.row.aoid;
	// var row1=props.row.ticker;
	// var row1=props.row.aosize;
	
	render(){
	return(
			<Modal show={this.props.show} onHide={this.props.show} >
			  <Modal.Header>
				<Modal.Title>Graph current row</Modal.Title>
			  </Modal.Header>
			  <Modal.Body>
				<PlotChart
						graphorders={this.props.graphorders}
		        />

				{/*Hello from row number*/}
				{/*{row}*/}
				{/*{row1}*/}
			  </Modal.Body>
			  <Modal.Footer>
				<Button variant="secondary" onClick={this.props.closeForm}>Close</Button>
				{/*<Button variant="primary" onClick={props.saveForm}>Save changes</Button>*/}
			  </Modal.Footer>
			</Modal>
	)
  }
};

