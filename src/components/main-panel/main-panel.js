// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import React,{Component} from 'react';
import AlgoOrdersPanelContainer from './algo-orders-panel/algo-orders-panel-container';
// import * as PositionsPanel from './positions-panel/positions-panel';
// import {PositionsPanel} from './positions-panel/positions-panel';
import PositionsPanelContainer from './positions-panel/positions-panel-container';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import * as libpybx from 'libpybx-js';
import * as NTIAlgo from '../../gen-js/NTIAlgo.js';
import style from './main-panel.module.css';

class SnapshotObserverI extends NTIAlgo.SnapshotObserver
{
    constructor(app) {
	// debugger;
	super();
	this.app = app;
    }
    
    changedSnapshot(snapshot) {
	//console.log("df:", df)
	//this.app.timestamp.refresh(snapshot.timestamp);
	this.app.position_panel.refresh(snapshot.timestamp, snapshot.position);
	this.app.algo_orders_panel.refresh(snapshot.algo_orders);
    }
};

class MainPanel extends Component {
    constructor() {
	super();
	this.comm = new libpybx.Communicator();
	// this.state = {algoman_rop: null};
	this.ws_url = "ws://localhost:3005/";
    }

    componentDidMount() {
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
	    // this.setState({algoman_rop: algoman_rop});
		this.props.setAlgomanRop(algoman_rop);
	}).then(() => {
	    console.log("connection setup is done");
	});
	
    }
    
    render() {
	return (
		<div className={style.main}>
		  <SplitterLayout vertical>
		   <div>
			<PositionsPanelContainer
					comm={this.comm}
					ref={r => this.position_panel = r}
			/>
	      </div>
		  <div>
			<AlgoOrdersPanelContainer 
				  comm={this.comm}
				  // algoman_rop={this.state.algoman_rop}
				  algoman_rop={this.props.algoman_rop}
				  ref={r => this.algo_orders_panel = r}
				  ws_url={this.ws_url}
			/>
		  </div>
		 </SplitterLayout>
		</div>
	);
    }
};

export default MainPanel;
