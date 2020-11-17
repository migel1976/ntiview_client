import * as React from 'react';
import * as ReactDOM from 'react-dom';

import "@devexpress/dx-react-grid";
import {Grid, Table, TableHeaderRow} from "@devexpress/dx-react-grid-bootstrap4";
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';

export class PositionsPanel extends React.Component {
    constructor(props) {
	super(props);
	this.state = {ts: null, columns: [], rows: []};
	this.refresh = this.refresh.bind(this);
    }

    refresh(ts, df) {
	this.setState({
	    ts: ts,
	    columns: df.columns.map(x => {return {name: x};}),
	    rows: JSON.parse(df.dataframeJSON)
	});
    }
    
    render() {
	return (
		<div>
		{/*<h2>{this.state.ts}</h2>*/}
		<Grid rows={this.state.rows} columns={this.state.columns}>
		<Table />
		<TableHeaderRow />
		</Grid>
		</div>
	);
    }
};
