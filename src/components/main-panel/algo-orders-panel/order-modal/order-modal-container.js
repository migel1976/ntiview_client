import React from 'react';
import {connect} from 'react-redux';
import {OrderModal} from './order-modal';
import {setOrderItem,setOrderShowModal} from '../../../../redux/orderReducer';
import * as NTIAlgo from '../../../../gen-js/NTIAlgo.js';

class OrderModalContainer extends React.Component{
	constructor(props){
		super(props);
		this.state={ticker:''}
		this.state={buysell:''}
		this.state={algo:''}
		this.state={algosize:''}
		this.state={account:''}
		// this.state={item:null}
	};
    initStateValue(){
		var ticker=this.props.ticker[0];
		var buysell=this.props.buysell[0];
		var algo=this.props.algo[0];
		var algosize=this.props.algosize;
		var account=this.props.account;
		this.setState({ticker,buysell,algo,algosize,account});
	};

	componentDidMount=()=>{
		this.initStateValue();
		// var ticker=this.props.ticker[0];
		// var buysell=this.props.buysell[0];
		// var algo=this.props.algo[0];
		// var algosize=this.props.algosize;
		// var account=this.props.account;
		// this.setState({ticker,buysell,algo,algosize,account});
	};

	changeInputAccount=(e)=>{
		var account=e.target.value;
		console.log('algosize is:',account);
		this.setState({account});
	};

	changeInputAlgosize=(e)=>{
		var algosize=e.target.value;
		console.log('algosize is:',algosize);
		this.setState({algosize});
	};

	changeSelectTicker=(e)=>{
		var ticker=e.target.value;
		this.setState({ticker});
	};

	changeSelectBuysell=(e)=>{
		var buysell=e.target.value;
		this.setState({buysell});
	};
	
	changeSelectAlgo=(e)=>{
		var algo=e.target.value;
		this.setState({algo});
	};
	saveForm=(e)=>{
		const item={
					ticker:this.state.ticker,
					buysell:this.state.buysell,
					algo:this.state.algo,
					algosize:this.state.algosize,
					account:this.state.account
		};
		// debugger;
		// this.setState({item:lclitem});
		// this.props.setOrderItem(item);
		this.place_test_orders(item);
		this.props.setOrderShowModal(false);
		// console.log('saveForm is: ',this.props.orderitem);
	};

	closeForm=()=>{
		const item=null;
		this.props.setOrderItem(item);
		this.props.setOrderShowModal(false);
		// debugger;
		this.setState({item});
		console.log(this.props.orderitem);
	};

    place_test_orders=(item)=>{
    if(item!==null){	
	const ticker=item.ticker;
	const buysell=item.buysell;
	const algo=item.algo;
	const algosize=parseInt(item.algosize);
	const account=item.account;
    // if(this.state.item!==null){	
	// const ticker=this.state.item.ticker;
	// const buysell=this.state.item.buysell;
	// const algo=this.state.item.algo;
	// const algosize=this.state.item.algosize;
	// const account=this.state.item.account;
	// let oa = new NTIAlgo.AlgoOrderAttributes("TWAP", "AAPL", "X",
	// 					 'SELL',//NTIAlgo.OrderSide.SELL
	// 					 15000,
	// 					 0, 0, 0, 0, 0);
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
