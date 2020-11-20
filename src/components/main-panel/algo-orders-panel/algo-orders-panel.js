import * as React from 'react';
import * as ReactDOM from 'react-dom';
import OrderModalContainer from './order-modal/order-modal-container';
import {Button} from 'react-bootstrap';
import "@devexpress/dx-react-grid";
// import {Grid, Table, TableHeaderRow} from "@devexpress/dx-react-grid-bootstrap4";
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
// import * as NTIAlgo from './gen-js/NTIAlgo.js';
import * as NTIAlgo from '../../../gen-js/NTIAlgo.js';
const TableRowStyle = ({ row, ...restProps }) => (
  <Table.Row
    {...restProps}
    style={{
      cursor: "pointer",
      background: "#ABC3CF",
      height: 60,
      border: "1px solid black"
    }}
  />
);

export class AlgoOrdersPanel extends React.Component {
    constructor(props) {
	super(props);
	this.state={isOpen:false};
	this.state={flagSelection:false};
	this.state = {selection: [],pageSize:5};
	this.state={pageSizes:[5,10,0]};
	this.state = {columns: [], rows: []};
	this.place_test_orders = this.place_test_orders.bind(this);
    }
	// state={pageSize:5};
	setPageSize=(e)=>{
		debugger;
		console.log(e);
	};    
	setSelection=(sel)=>{
		// debugger;
		console.log('rows',this.state.rows);
		console.log('selection',sel);
		this.setState({selection:sel});		
		if(sel.length>0){
			this.setState({flagSelection:true});
		}else
		{
			this.setState({flagSelection:false});
		}
		// var index=sel;
		// var objectID=this.state.rows[index].aoid;
		// this.props.comm.get_rop(NTIAlgo.AlgoOrder,this.props.ws_url,objectID)
		// 	.then(rop=>{rop.cancelAlgoOrder()});

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
			
	//работает с одни заказом
	// cancelOrder=()=>{
	// 	var index=this.state.selection;
	// 	var objectID=this.state.rows[index].aoid;
	// 	this.props.comm.get_rop(NTIAlgo.AlgoOrder,this.props.ws_url,objectID)
	// 		.then(rop=>{
	// 			rop.cancelAlgoOrder();
	// 			this.setState({selection:[]});
	// 		});
	// };

    refresh(df) {
	this.setState({columns: df.columns.map(x => {return {name: x};}),
		       rows: JSON.parse(df.dataframeJSON)});
    }

    place_test_orders() {
	let oa = new NTIAlgo.AlgoOrderAttributes("TWAP", "AAPL", "X",
						 'SELL',//NTIAlgo.OrderSide.SELL
						 15000,
						 0, 0, 0, 0, 0);
						 
	this.props.algoman_rop.placeAlgoOrder(oa).then(() => {
	    console.log("order was placed");
	});
    }

	openModal=()=>{
		this.props.setOrderShowModal(true);
			// this.setState({isOpen:true})
			// this.
	};

    
    render() {
	return (
	    <div>
		<Button variant='primary' onClick={this.openModal}>PLACE TEST ORDERS</Button>{' '}

		{/*<Button variant='primary' onClick={this.place_test_orders}>PLACE TEST ORDERS</Button>{' '}*/}
		<Button variant='danger' onClick={this.cancelOrder} disabled={!this.state.flagSelection}>Cancel Order(s)</Button>
		<OrderModalContainer />
		<Grid rows={this.state.rows} columns={this.state.columns}>
		{/*<PagingPanel pageSizes={this.state.pageSizes} />*/}
		 <SelectionState
			selection={this.state.selection}
			onSelectionChange={this.setSelection}
		  />
		<IntegratedSelection />
		{/*<PagingState */}
			{/*defaultCurrentPage={0}*/}
			 {/*pageSize={this.state.pageSize}*/}
		{/*/>*/}
		{/*<IntegratedPaging />*/}
		<Table rowComponent={TableRowStyle} />
		{/*<PagingPanel pageSizes={this.state.pageSizes} />*/}
		{/*<PagingPanel pageSizes={[5,10,0]} />*/}
		{/*<Table />*/}
		<VirtualTable />
		<TableHeaderRow />
		<TableSelection showSelectAll selectByRowClick />
		</Grid>
		  {/*<button onClick={this.place_test_orders}>PLACE TEST ORDERS</button>*/}
		  {
			  // this.state.flagSelection?
			  // <button onClick={this.cancelOrder}>Cancel Order(s)</button>
			  // :<div></div>
		  }
		   
	    </div>
	);
    }
};
