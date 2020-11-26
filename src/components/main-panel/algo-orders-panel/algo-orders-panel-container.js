import React,{Component} from 'react';
import {connect} from 'react-redux';

import {AlgoOrdersPanel} from './algo-orders-panel';
import {setOrderShowModal} from '../../../redux/orderReducer';
import * as NTIAlgo from '../../../gen-js/NTIAlgo.js';

class AlgoOrdersPanelContainer extends Component{
	constructor(props){
		super(props);
	    this.state = {columns: [], rows: [], flagSelection:false, selection:[], showPopup:false};
		this.setSelection=this.setSelection.bind(this);
		this.cancelOrder=this.cancelOrder.bind(this);
		
	}

	// setSelection=(sel)=>{
	setSelection(sel){
		this.setState({selection:sel});		
		if(sel.length>0){
			this.setState({flagSelection:true});
			this.setState({showPopup:true});
		}else
		{
			this.setState({flagSelection:false});
		}
		
	};

	async cancelOrders(){
		var elements=this.state.selection;
		var count=0;
		var ret;
		for(const el in elements){
			var id=elements[count];
			var objectID=this.state.rows[id].aoid;
			var rop=await this.props.comm.get_rop(NTIAlgo.AlgoOrder,this.props.ws_url,objectID);
			ret=rop.cancelAlgoOrder();
			console.log('ret is',ret);
			count++;
		};
		this.setState({selection:[]});
		this.setState({flagSelection:false});
	};

	// cancelOrder=()=>{
	cancelOrder(){
		this.cancelOrders();
	};
	
    refresh(df) {
	this.setState({columns: df.columns.map(x => {return {name: x, title:x.toUpperCase()};}),
		       rows: JSON.parse(df.dataframeJSON)});
    }

	render(){
		return(
			<AlgoOrdersPanel 
				showPopup={this.props.showPopup}
			    algoman_rop={this.props.algoman_rop}	
				setOrderShowModal={this.props.setOrderShowModal}
				columns={this.state.columns}
				rows={this.state.rows}
				flagSelection={this.state.flagSelection}
				selection={this.state.selection}
				setSelection={this.setSelection}
				cancelOrder={this.cancelOrder}
			/>
		)
	}
};

const mapStateToProps=(state)=>({
	ordershowmodal:state.orderPage.ordershowmodal
});

const mapActionsToProps=({
	setOrderShowModal
});
// export default AlgoOrdersPanelContainer;
export default connect(mapStateToProps,mapActionsToProps,null,{forwardRef:true})(AlgoOrdersPanelContainer);
