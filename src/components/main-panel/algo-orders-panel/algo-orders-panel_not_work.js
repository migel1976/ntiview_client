import * as React from 'react';
import * as ReactDOM from 'react-dom';

import "@devexpress/dx-react-grid";
import {Grid,
		Table,
		TableHeaderRow,
		TableSelection

} from "@devexpress/dx-react-grid-bootstrap4";
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';

import {
	IntegratedSelection,
	SelectionState,
} from '@devexpress/dx-react-grid';
// import * as NTIAlgo from './gen-js/NTIAlgo.js';
import * as NTIAlgo from '../../../gen-js/NTIAlgo.js';

export class AlgoOrdersPanel extends React.Component {
    constructor(props) {
	super(props);
	this.state = {columns: [], rows: []};
	this.state = {selection: []};
	this.place_test_orders = this.place_test_orders.bind(this);
    }
 
	// setSelection=(sel)=>{
	// 	debugger;
	// 	console.log('selection',sel);
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
    
    render() {
	return (
	    <div>
		<Grid rows={this.state.rows} columns={this.state.columns}>
		 {/*<SelectionState*/}
			{/*selection={this.state.selection}*/}
			{/*onSelectionChange={this.setSelection}*/}
		  {/*/>*/}
		{/*<IntegratedSelection />*/}
		<Table />
		<TableHeaderRow />
		{/*<TableSelection showSelectAll selectByRowClick />*/}
		</Grid>
		<button onClick={this.place_test_orders}>PLACE TEST ORDERS</button>
	    </div>
	);
    }
};
