// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import React,{Component} from 'react';
import OrderModalContainer from './order-modal/order-modal-container';
import {Button,Popover, OverlayTrigger} from 'react-bootstrap';
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
	this.state = {      
      name: "React",      
      popoverOpen: false    
    };
    this.togglePopover = this.togglePopover.bind(this);
    }

	togglePopover() {    
	  this.setState({ popoverOpen: !this.state.popoverOpen })  
	}
	// openModal=()=>{
	openModal(){
		this.props.setOrderShowModal(true);
	};
    
    render() {
	const popover = (
		  <Popover id="popover-basic">
			<Popover.Title as="h3">Popover right</Popover.Title>
			<Popover.Content style={{height:"300px"}}>
			  And here's some <strong>amazing</strong> content. It's very engaging.
			  right?
			  hello world
			</Popover.Content>
		  </Popover>
		);	
	return (
	    <div>
		{/*<Example popover={popover} />*/}
		<Button variant='primary' onClick={this.openModal}>PLACE TEST ORDERS</Button>{' '}
		<Button variant='danger' onClick={this.props.cancelOrder} disabled={!this.props.flagSelection}>Cancel Order(s)</Button>
		<OrderModalContainer 
			algoman_rop={this.props.algoman_rop}	
		/>
		{/*<OverlayTrigger */}
			{/*overlay={popover}*/}
			{/*placement="bottom"*/}
		  {/*>*/}
		<Grid rows={this.props.rows} columns={this.props.columns}>
		 <SelectionState
			selection={this.props.selection}
			onSelectionChange={this.props.setSelection}
		  />
		<IntegratedSelection />
		<Table />
		<VirtualTable />
		<TableHeaderRow />
		<TableSelection showSelectAll selectByRowClick />
		</Grid>
		{/*</OverlayTrigger>*/}
	    </div>
	);
    }
};

const Example = (props) => (
  <OverlayTrigger 
		overlay={props.popover}
		placement="bottom"
		delay={{ show: 250, hide: 400 }}
	>
	<div>
    <Button variant="success">Click me to see</Button>
    <Button variant="success">Click me to see</Button>
	</div>
  </OverlayTrigger>
);
