import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AlgoOrdersPanel} from './algo-orders-panel/algo-orders-panel';
// import * as AlgoOrdersPanel from './algo-orders-panel/algo-orders-panel';
// import * as AlgoOrdersPanelContainer  from './algo-orders-panel/algo-orders-panel-container';
import AlgoOrdersPanelContainer from './algo-orders-panel/algo-orders-panel-container';
// import * as PositionsPanel from './positions-panel/positions-panel';
import {PositionsPanel} from './positions-panel/positions-panel';

import * as libpybx from 'libpybx-js';
import * as NTIAlgo from '../../gen-js/NTIAlgo.js';


class SnapshotObserverI extends NTIAlgo.SnapshotObserver
{
    constructor(app) {
	debugger;
	super();
	this.app = app;
    }
    
    changedSnapshot(snapshot) {
	//console.log("df:", df)
	//this.app.timestamp.refresh(snapshot.timestamp);
	this.app.position_panel.refresh(snapshot.timestamp, snapshot.position);
	this.app.algo_orders_panel.refresh(snapshot.algo_orders);
	// this.app.algo_orders_panel_container .refresh(snapshot.algo_orders);
    }
};

class MainPanel extends React.Component {
    constructor() {
	// debugger;
	super();
	this.comm = new libpybx.Communicator();
	this.state = {algoman_rop: null};
	this.ws_url = "ws://localhost:3005/";
    }

    componentDidMount() {
	// let ws_url = "ws://localhost:12345/";
	// let ws_url = "ws://localhost:3005/";
	let object_id = "snapman";
	this.comm.get_rop(NTIAlgo.SnapshotManager,this.ws_url,object_id).then(rop => {
	    console.log("connected to backend");
	    this.snapman_rop = rop;
	}).then(() => {
	    let o = new SnapshotObserverI(this);
	    let s_rop = this.comm.add_object(o);
	    return this.snapman_rop.registerObserver(s_rop);
	}).then(() => {
	    return this.comm.get_rop(NTIAlgo.AlgoOrderManager,this.ws_url,"algoman");
	}).then ((algoman_rop) => {
	    this.setState({algoman_rop: algoman_rop});
	}).then(() => {
	    console.log("connection setup is done");
	});
	
    }
    
    render() {
	return (
		<div>
		<PositionsPanel
		// {/*<PositionsPanel.PositionsPanel*/}
				comm={this.comm}
	            ref={r => this.position_panel = r}
		/>
		<hr/>
		<AlgoOrdersPanelContainer 
		// <AlgoOrdersPanel
		// <AlgoOrdersPanel.AlgoOrdersPanel
		// {/*<AlgoOrdersPanelContainer*/}
			  comm={this.comm}
	          algoman_rop={this.state.algoman_rop}
	          ref={r => this.algo_orders_panel = r}
	          // ref={r => this.algo_orders_panel_container = r}
			  ws_url={this.ws_url}
		/>
		</div>
	);
    }
};

export default MainPanel;
