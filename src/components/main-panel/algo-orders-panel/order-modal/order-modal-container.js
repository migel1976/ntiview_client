import React from 'react';
import {connect} from 'react-redux';
import {OrderModal} from './order-modal';
import {setOrderItem,setOrderShowModal} from '../../../../redux/orderReducer';

class OrderModalContainer extends React.Component{
	constructor(props){
		super(props);
		this.state={ticker:''}
	};
	
	componentDidMount=()=>{
		var ticker=this.props.ticker[0];
		this.setState({ticker});
	};

	changeSelectTicker=(e)=>{
		var ticker=e.target.value;
		alert('ticker is: '+ticker);
	};
	
	saveForm=(e)=>{
		const item={ticker:this.state.ticker};
		this.props.setOrderItem(item);
		this.props.setOrderShowModal(false);

		debugger;
		console.log(this.props.orderitem);
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
			    // setOrderItem={this.props.setOrderItem}	
				// setOrderShowModal={this.props.setOrderShowModal}

				changeSelectTicker={this.changeSelectTicker}
				saveForm={this.saveForm}
				closeForm={this.closeForm}
			/>
		)
	};
};

const mapStateToProps=(state)=>({
	ticker:state.orderPage.ticker,
    buysell:state.orderPage.buysell,	
	algo:state.orderPage.algo,
	ordershowmodal:state.orderPage.ordershowmodal,
	orderitem:state.orderPage.orderitem
});

const mapActionsToProps=({
	setOrderItem,
	setOrderShowModal
});

export default connect(mapStateToProps,mapActionsToProps)(OrderModalContainer);
