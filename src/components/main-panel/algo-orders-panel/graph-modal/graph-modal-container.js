import React,{Component} from 'react';
import {connect} from 'react-redux';

import {setGraphShowModal, setSelectionOrder, getGraphOrdersByAOID} from '../../../../redux/orderReducer';
import GraphModal from './graph-modal';

class GraphModalContainer extends Component{
	constructor(props){
		// debugger;
		super(props);
		this.closeForm=this.closeForm.bind(this);
		// const aoid=this.props.rowcurrentorder.aoid;
		// this.props.getGraphOrdersByAOID(aoid);
	};

	componentDidUpdate(prevProps){
		// debugger;
		// if(this.props.graphorders!=prevProps.graphorders){
		
		// const aoid=this.props.rowcurrentorder.aoid;
		// const aoidPrev=prevProps.rowcurrentorder.aoid;
		// if(this.props.rowcurrentorder.aoid=prevProps.rowcurrentorder.aoid){
		// 	const aoid=this.props.rowcurrentorder.aoid;
		// 	debugger;
		// 	this.props.getGraphOrdersByAOID(aoid);
		// }
	};

	closeForm(e){
		this.props.setGraphShowModal(false);
		this.props.setSelectionOrder([]);
	};
	render(){
		return(
			<GraphModal
				show={this.props.graphshowmodal}
				closeForm={this.closeForm}
				row={this.props.rowcurrentorder}
			    graphorders={this.props.graphorders}	
				getGraphOrdersByAOID={this.props.getGraphOrdersByAOID}
			/>
		)
	}
};

const mapStateToProps=(state)=>({
	graphshowmodal:state.orderPage.graphshowmodal,
	rowsorder:state.orderPage.rowsorder,
	selectionorder:state.orderPage.selectionorder,
	rowcurrentorder:state.orderPage.rowcurrentorder,
	graphorders:state.orderPage.graphorders
});

const mapActionsToProps=({
   setGraphShowModal,
   setSelectionOrder,
   getGraphOrdersByAOID
});

export default connect(mapStateToProps,mapActionsToProps,null,{forwardRef:true})(GraphModalContainer);
