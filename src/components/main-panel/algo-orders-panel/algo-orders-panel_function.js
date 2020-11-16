import * as React from 'react';
import {useState} from 'react';
import * as ReactDOM from 'react-dom';
import {
	GroupingState,
	IntegratedSelection,
	SelectionState,
	IntegratedGrouping,
} from '@devexpress/dx-react-grid';

import "@devexpress/dx-react-grid";
import {Grid, Table, TableHeaderRow, TableSelection} from "@devexpress/dx-react-grid-bootstrap4";
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';

// import * as NTIAlgo from './gen-js/NTIAlgo.js';
import * as NTIAlgo from '../../../gen-js/NTIAlgo.js';

// export class AlgoOrdersPanel extends React.Component {
export const AlgoOrdersPanel=(props)=>{
    // constructor(props) {
	// super(props);
	// this.state = {columns: [], rows: []};
	// this.place_test_orders = this.place_test_orders.bind(this);
    // }
	
    const [columns, setColumns] = useState([]);
    const [rows, setRows] = useState([]);
	const [selection, setSelection] = useState([]);

	const refresh=(df)=>{
		// debugger;
	    setColumns(df.columns.map(x => { return {name: x}; }));
	    let df_rows = JSON.parse(df.dataframeJSON)
		console.log('data-row',df_rows);
	    setRows(df_rows);
	};

    
    // refresh(df) {
	// this.setState({columns: df.columns.map(x => {return {name: x};}),
		       // rows: JSON.parse(df.dataframeJSON)});
    // }

    const place_test_orders=()=>{
	let oa = new NTIAlgo.AlgoOrderAttributes("TWAP", "AAPL", "X",
						 'SELL',//NTIAlgo.OrderSide.SELL
						 15000,
						 0, 0, 0, 0, 0);
						 
	props.algoman_rop.placeAlgoOrder(oa).then(() => {
	    console.log("order was placed");
	});
    }
    
    // render() {
	return (
	    <div>
		{/*<Grid rows={this.state.rows} columns={this.state.columns}>*/}
		<Grid rows={rows} columns={columns}>
		 <SelectionState
            selection={selection}
            onSelectionChange={setSelection}
          />
		<IntegratedSelection />
		<Table />
		<TableHeaderRow />
		<TableSelection showSelectAll selectByRowClick />
		</Grid>
		<button onClick={place_test_orders}>PLACE TEST ORDERS</button>
	    </div>
	);
    // }
};
