import React,{Component} from 'react';
import {connect} from 'react-redux';

import {setGraphShowModal,setSelectionOrder} from '../../../../redux/orderReducer';
import {GraphModal} from './graph-modal';

class GraphModalContainer extends Component{
	constructor(props){
		debugger;
		super(props);
		// this.saveForm=this.saveForm.bind(this);
		this.closeForm=this.closeForm.bind(this);
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
			/>
		)
	}
};

const mapStateToProps=(state)=>({
	graphshowmodal:state.orderPage.graphshowmodal,

});

const mapActionsToProps=({
   setGraphShowModal,
   setSelectionOrder
});

export default connect(mapStateToProps,mapActionsToProps,null,{forwardRef:true})(GraphModalContainer);
