// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import React,{Component} from 'react';
import OrderModalContainer from './order-modal/order-modal-container';
import GraphModalContainer from './graph-modal/graph-modal-container'; 
import {Button, Form} from 'react-bootstrap';

import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import "@devexpress/dx-react-grid";
import {Grid,
		Table,
		TableHeaderRow,
		TableSelection,
		VirtualTable,
		PagingPanel

} from "@devexpress/dx-react-grid-bootstrap4";
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
import {
	IntegratedSelection,
	SelectionState,
	PagingState,
	IntegratedPaging
} from '@devexpress/dx-react-grid';
// import * as NTIAlgo from '../../../gen-js/NTIAlgo.js';
export class AlgoOrdersPanel extends Component {
    constructor(props) {
	super(props);
		this.openModal=this.openModal.bind(this);
		// this.openGraphModal=this.openGraphModal.bind(this);
    };

	// openModal=()=>{
	openModal(){
		this.props.setOrderShowModal(true);
	};

	// openGraphModal(e){
	// 	this.props.setToggleSelectionGraph(e);
	// };
    
    render() {
	return (
	    <div>
		<Button variant='primary' onClick={this.openModal}>PLACE TEST ORDERS</Button>{' '}
		<Button variant='danger' onClick={this.props.cancelOrder} disabled={!this.props.flagSelection}>Cancel Order(s)</Button>{' '}
		 <div style={{float:"right"}}> 
		 <InputGroup>
			<InputGroupAddon addonType="prepend">
			  <InputGroupText>
				<Input addon type="checkbox" onChange={this.props.setToggleSelectionGraph} />
				{/*<Input addon type="checkbox" onChange={this.openGraphModal} />*/}
			  </InputGroupText>
			</InputGroupAddon>
			<Input placeholder="show graph" disabled />
		  </InputGroup>
		</div>
		{/*<OrderModalContainer */}
			{/*algoman_rop={this.props.algoman_rop}	*/}
		{/*/>*/}

		{/*<GraphModalContainer />*/}

		<Grid rows={this.props.rows} columns={this.props.columns}>
		 <SelectionState
			selection={this.props.selection}
			// selection={this.props.selectionorder}
			onSelectionChange={this.props.setSelection}
		  />
		<IntegratedSelection />
		<Table />
		<VirtualTable />
		<TableHeaderRow />
		<TableSelection showSelectAll selectByRowClick />
		</Grid>
	    </div>
	);
    }
};

