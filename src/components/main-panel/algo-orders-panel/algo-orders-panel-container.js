import React from 'react';
import {connect} from 'react-redux';

import {AlgoOrdersPanel} from './algo-orders-panel';
import {setOrderShowModal} from '../../../redux/orderReducer';

class AlgoOrdersPanelContainer extends React.Component{
	render(){
		return(
			<AlgoOrdersPanel 
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

export default connect(mapStateToProps,mapActionsToProps)(AlgoOrdersPanelContainer);
