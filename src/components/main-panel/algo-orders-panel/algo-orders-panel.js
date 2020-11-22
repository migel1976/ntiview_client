import * as React from 'react';
import * as ReactDOM from 'react-dom';
import OrderModalContainer from './order-modal/order-modal-container';
import {Button} from 'react-bootstrap';
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
import * as NTIAlgo from '../../../gen-js/NTIAlgo.js';
export class AlgoOrdersPanel extends React.Component {
    constructor(props) {
	super(props);
	// this.state={isOpen:false};
	this.state={flagSelection:false};
	this.state = {selection: []};
	this.state = {columns: [], rows: []};
	// this.place_test_orders = this.place_test_orders.bind(this);
    }

	setSelection=(sel)=>{
		this.setState({selection:sel});		
		if(sel.length>0){
			this.setState({flagSelection:true});
		}else
		{
			this.setState({flagSelection:false});
		}
	};

	async cancelOrders(){
		var elements=this.state.selection;
		var count=0;
		var ret;
		for(const el in elements){
			var id=elements[count];
			var objectID=this.state.rows[id].aoid;
			var rop=await this.props.comm.get_rop(NTIAlgo.AlgoOrder,this.props.ws_url,objectID);
			ret=rop.cancelAlgoOrder();
			console.log('ret is',ret);
			count++;
		};
		this.setState({selection:[]});
		this.setState({flagSelection:false});
	};

	cancelOrder=()=>{
		this.cancelOrders();
	};
			
    // refresh(df) {
	// this.setState({columns: df.columns.map(x => {return {name: x};}),
		       // rows: JSON.parse(df.dataframeJSON)});
    // }

    place_test_orders=()=>{
	let oa = new NTIAlgo.AlgoOrderAttributes("TWAP", "AAPL", "X",
						 'SELL',//NTIAlgo.OrderSide.SELL
						 15000,
						 0, 0, 0, 0, 0);
	debugger;
	this.props.algoman_rop.placeAlgoOrder(oa).then(() => {
	    console.log("order was placed");
	});
    }

	openModal=()=>{
		this.props.setOrderShowModal(true);
	};
    
    render() {
	return (
	    <div>
		<Button variant='primary' onClick={this.openModal}>PLACE TEST ORDERS</Button>{' '}
		{/*<Button variant='primary' onClick={this.place_test_orders}>PLACE TEST ORDERS</Button>{' '}*/}
		<Button variant='danger' onClick={this.cancelOrder} disabled={!this.state.flagSelection}>Cancel Order(s)</Button>
		<OrderModalContainer />
		<Grid rows={this.state.rows} columns={this.state.columns}>
		 <SelectionState
			selection={this.state.selection}
			onSelectionChange={this.setSelection}
		  />
		<IntegratedSelection />
		{/*<Table rowComponent={TableRowStyle} />*/}
		<Table />
		<VirtualTable />
		<TableHeaderRow />
		<TableSelection showSelectAll selectByRowClick />
		</Grid>
	    </div>
	);
    }
};
