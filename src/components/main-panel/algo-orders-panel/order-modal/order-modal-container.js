import React from 'react';
import {connect} from 'react-redux';
import {OrderModal} from './order-modal';
import {setOrderItem,setOrderShowModal} from '../../../../redux/orderReducer';

class OrderModalContainer extends React.Component{
	constructor(props){
		super(props);
		this.state={ticker:''}
		this.state={buysell:''}
		this.state={algo:''}
		this.state={algosize:''}
		this.state={account:''}
	};
	
	componentDidMount=()=>{
		var ticker=this.props.ticker[0];
		var buysell=this.props.buysell[0];
		var algo=this.props.algo[0];
		var algosize=this.props.algosize;
		var account=this.props.account;
		this.setState({ticker,buysell,algo,algosize,account});
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
					algosize:this.state.algosize
		};
		debugger;
		this.props.setOrderItem(item);
		this.props.setOrderShowModal(false);
		// console.log('saveForm is: ',this.props.orderitem);
	};

	closeForm=()=>{
		const item={ticker:''};
		this.props.setOrderItem(item);
		this.props.setOrderShowModal(false);
		debugger;
		console.log(this.props.orderitem);
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

export default connect(mapStateToProps,mapActionsToProps)(OrderModalContainer);
