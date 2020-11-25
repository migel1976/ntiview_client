// import React from 'react';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {OrderModal} from './order-modal';
import {setOrderItem,setOrderShowModal} from '../../../../redux/orderReducer';
import * as NTIAlgo from '../../../../gen-js/NTIAlgo.js';

class OrderModalContainer extends Component{
	constructor(props){
		super(props);

		this.state={ticker:''}
		this.state={buysell:''}
		this.state={algo:''}
		this.state={algosize:''}
		this.state={account:''}
		// this.state={item:null}
		// this.place_test_orders = this.place_test_orders.bind(this);
		this.changeInputAccount=this.changeInputAccount.bind(this);
		this.changeInputAlgosize=this.changeInputAlgosize.bind(this);
		this.changeSelectTicker=this.changeSelectTicker.bind(this);
		this.changeSelectBuysell=this.changeSelectBuysell.bind(this);
		this.changeSelectAlgo=this.changeSelectAlgo.bind(this);
		this.saveForm=this.saveForm.bind(this);
		this.closeForm=this.closeForm.bind(this);
	};
    initStateValue(){
		var ticker=this.props.ticker[0];
		var buysell=this.props.buysell[0];
		var algo=this.props.algo[0];
		var algosize=this.props.algosize;
		var account=this.props.account;
		this.setState({ticker,buysell,algo,algosize,account});
	};

	componentDidMount(){
		this.initStateValue();
	};

	// changeInputAccount=(e)=>{
	changeInputAccount(e){
		var account=e.target.value;
		console.log('algosize is:',account);
		this.setState({account});
	};

	// changeInputAlgosize=(e)=>{
	changeInputAlgosize(e){
		var algosize=e.target.value;
		console.log('algosize is:',algosize);
		this.setState({algosize});
	};

	// changeSelectTicker=(e)=>{
	changeSelectTicker(e){
		var ticker=e.target.value;
		this.setState({ticker});
	};

	// changeSelectBuysell=(e)=>{
	changeSelectBuysell(e){
		var buysell=e.target.value;
		this.setState({buysell});
	};
	
	// changeSelectAlgo=(e)=>{
	changeSelectAlgo(e){
		var algo=e.target.value;
		this.setState({algo});
	};
	// saveForm=(e)=>{
	saveForm(e){
		const item={
					ticker:this.state.ticker,
					buysell:this.state.buysell,
					algo:this.state.algo,
					algosize:this.state.algosize,
					account:this.state.account
		};
		this.place_test_orders(item);
		this.props.setOrderShowModal(false);
	};

	// closeForm=(e)=>{
	closeForm(e){
		const item=null;
		this.props.setOrderItem(item);
		this.props.setOrderShowModal(false);
		// this.setState({item});
		this.initStateValue();
	};

    // place_test_orders=(item)=>{
    place_test_orders(item){
    if(item!==null){	
	const ticker=item.ticker;
	const buysell=item.buysell;
	const algo=item.algo;
	const algosize=parseInt(item.algosize);
	const account=item.account;
	let oa = new NTIAlgo.AlgoOrderAttributes(algo,ticker,account,
						 buysell,//NTIAlgo.OrderSide.SELL
						 algosize,
						 0, 0, 0, 0, 0);
	debugger;
	this.props.algoman_rop.placeAlgoOrder(oa).then(() => {
	    console.log("order was placed");
		
	});
    }
		this.initStateValue();
	};

	render(){
		// debugger;
		console.log('show is',this.props);
		return(
			<OrderModal
			    show={this.props.ordershowmodal}
				ticker={this.props.ticker}
				buysell={this.props.buysell}
				algo={this.props.algo}

				ticker_value={this.state.ticker}
				buysell_value={this.state.buysell}
				algo_value={this.state.algo}
				algosize_value={this.state.algosize}
				account_value={this.state.account}

				changeSelectTicker={this.changeSelectTicker}
				changeSelectBuysell={this.changeSelectBuysell}
				changeSelectAlgo={this.changeSelectAlgo}
				changeInputAlgosize={this.changeInputAlgosize}
				changeInputAccount={this.changeInputAccount}

				saveForm={this.saveForm}
				closeForm={this.closeForm}
			/>
		)
	};
};

const mapStateToProps=(state)=>({
	algosize:state.orderPage.algosize,
	ticker:state.orderPage.ticker,
    buysell:state.orderPage.buysell,	
	algo:state.orderPage.algo,
	ordershowmodal:state.orderPage.ordershowmodal,
	orderitem:state.orderPage.orderitem,
	account:state.orderPage.account
});

const mapActionsToProps=({
	setOrderItem,
	setOrderShowModal
});

export default connect(mapStateToProps,mapActionsToProps,null,{forwardRef:true})(OrderModalContainer);
