import React from 'react';
import {connect} from 'react-redux';

import {AlgoOrdersPanel} from './algo-orders-panel';
import {setOrderShowModal} from '../../../redux/orderReducer';

class AlgoOrdersPanelContainer extends React.Component{
	constructor(props){
		debugger;
		super(props);
	}

    refresh(df) {
	debugger;
	this.setState({columns: df.columns.map(x => {return {name: x};}),
		       rows: JSON.parse(df.dataframeJSON)});
    }

	render(){
		return(
			<AlgoOrdersPanel 
			    algoman_rop={this.props.algoman_rop}	
				setOrderShowModal={this.props.setOrderShowModal}
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
