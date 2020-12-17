import React,{Component} from 'react';
import AlgoOrdersPanelContainer from './algo-orders-panel/algo-orders-panel-container';
import PositionsPanelContainer from './positions-panel/positions-panel-container';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import * as libpybx from 'libpybx-js';
import * as NTIAlgo from '../../gen-js/NTIAlgo.js';
import style from './main-panel.module.css';

class SnapshotObserverI extends NTIAlgo.SnapshotObserver
{
    constructor(app) {
	super();
	this.app = app;
	// this.setSelection=this.setSelection.bind(this);
    }
    
    changedSnapshot(snapshot) {
	this.app.position_panel.refresh(snapshot.timestamp, snapshot.position);
	this.app.algo_orders_panel.refresh(snapshot.algo_orders);
    }
};

class MainPanel extends Component {
    constructor() {
	super();
	this.comm = new libpybx.Communicator();
	this.ws_url = "ws://localhost:3005/";
	// this.state={primaryHeight:250, secondaryHeight:250};
	this.state={h:250};
	this.state={serverinfo_rop:null, symbols:null, strategyTypes:null, accounts:null};
	this.state={strategy:null};
	this.state={symbol:null};
	this.secondarySizeChange=this.secondarySizeChange.bind(this);
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
	}).then(()=>{
		return this.comm.get_rop(NTIAlgo.ServerInfo,this.ws_url,"serverinfo");
	}).then((serverinfo_rop)=>{
		// debugger;
		// this.setState({serverinfo_rop:serverinfo_rop});
		this.props.setServerinfoRop(serverinfo_rop);
	}).then(() => {
	    console.log("connection setup is done");
	});
	
    }

	componentDidUpdate(prevProps,prevState){
		// debugger;
		if(this.props.serverinfo_rop!==prevProps.serverinfo_rop){
			if(this.props.serverinfo_rop!==null){

					this.props.serverinfo_rop.getStrategyTypes()
					.then(strategyTypes=>{
						this.setState({strategyTypes});
						this.props.setAlgo(strategyTypes.reverse());
					});

					// this.props.serverinfo_rop.getStrategyTypes()
					// .then(strategyTypes=>{
					// 	this.setState({strategyTypes});
					// 	let arrObj=[];
					// 	strategyTypes.forEach(function(item,i,arr){
					// 		const obj=item.strategyType;
					// 		arrObj.push(obj);
					// 	});
					// 	this.setState({strategy:arrObj});
					// 	this.props.setAlgo(arrObj.reverse());
					// });

					this.props.serverinfo_rop.getSymbols()
					.then(symbols=>{
						this.setState({symbols});
						this.props.setTicker(symbols);
					});

					// this.props.serverinfo_rop.getSymbols()
					// .then(symbols=>{
					// 	this.setState({symbols});
					// 	let arrObj=[];
					// 	symbols.forEach(function(item,i,arr){
					// 		const obj=item.symbol;
					// 		arrObj.push(obj);
					// 	});
					// 	this.setState({symbol:arrObj});
					// 	this.props.setTicker(arrObj);
					// });

					this.props.serverinfo_rop.getAccounts()
					.then(accounts=>{
						this.props.setAccount(accounts);
					});
				
					// this.props.serverinfo_rop.getAccounts()
					// .then(accounts=>{
					// 	this.setState({accounts});
					// 	let arrObj=[];
					// 	accounts.forEach(function(item,i,arr){
					// 		const obj=item.account;
					// 		arrObj.push(obj);
					// 	});
					// 	this.props.setAccount(arrObj);
					// });
			}
		}
		console.log('accounts is',this.state.accounts);
		console.log('symbols is',this.state.symbols);
		// console.log('symbol is',this.state.symbol);
		// console.log('accounts is',this.state.accounts);
		console.log('strategyTypes is',this.state.strategyTypes);
		// console.log('strategy is',this.state.strategy);
	}

	// primarySizeChange=(number)=>{
	// 	console.log('primarySizeChange is: ',number);
	// }

	secondarySizeChange(number){
		this.setState({h:number});
	}
    
    render() {
	return (
		<div className={style.main}>
		  <SplitterLayout
						  vertical
						  primaryIndex={1}
						  secondaryInitialSize={250}
						  // onPrimaryPaneSizeChange={this.primarySizeChange}
						  onSecondaryPaneSizeChange={this.secondarySizeChange}
							>
		   {/*<div>*/}
			<PositionsPanelContainer
					comm={this.comm}
					ref={r => this.position_panel = r}
				    height={this.state.h}
			/>
		  {/*</div>*/}
		  {/*<div>*/}
			<AlgoOrdersPanelContainer 
				  comm={this.comm}
				  // algoman_rop={this.state.algoman_rop}
				  algoman_rop={this.props.algoman_rop}
				  ref={r => this.algo_orders_panel = r}
				  ws_url={this.ws_url}
				  height={this.state.h}
			/>
		  {/*</div>*/}
		 </SplitterLayout>
		</div>
	);
    }
};

export default MainPanel;
