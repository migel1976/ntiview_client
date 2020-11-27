import React,{Component} from 'react';
import {connect} from 'react-redux';

import {setGraphShowModal,setSelectionOrder} from '../../../../redux/orderReducer';
import {GraphModal} from './graph-modal';

class GraphModalContainer extends Component{
	constructor(props){
		// debugger;
		super(props);
		// this.saveForm=this.saveForm.bind(this);
		this.closeForm=this.closeForm.bind(this);
		// this.findRow();

	};

	// componentDidUpdate(prevProps){
	// 	if(prevProps.rowsorder!==this.props.rowsorder){
	// 		this.findRow();
	// 	}
	// };
		

	findRow(){
		debugger;
		var elements=this.props.selectionorder;
		var id=elements[0];
		var objectID=this.props.rowsorder[id];
		console.log('ObjectID',objectID);
		// var objectID=this.props.rowsorder[id].aoid;

	};

	// saveForm(e){
	// 	this.props.setGraphShowModal(false);
	// };

	closeForm(e){
		this.props.setGraphShowModal(false);
		this.props.setSelectionOrder([]);
	};
	render(){
		return(
			<GraphModal
				show={this.props.graphshowmodal}
				// saveForm={this.saveForm}
				closeForm={this.closeForm}
				row={this.props.rowcurrentorder}
				// selectionorder={this.props.selectionorder}
				// rowsorder={this.props.rowsorder}
			/>
		)
	}
};

const mapStateToProps=(state)=>({
	graphshowmodal:state.orderPage.graphshowmodal,
	rowsorder:state.orderPage.rowsorder,
	selectionorder:state.orderPage.selectionorder,
	rowcurrentorder:state.orderPage.rowcurrentorder
});

const mapActionsToProps=({
   setGraphShowModal,
   setSelectionOrder
});

export default connect(mapStateToProps,mapActionsToProps,null,{forwardRef:true})(GraphModalContainer);
