// import React from 'react';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {setAlgomanRop, setServerinfoRop} from '../../redux/orderReducer';
import MainPanel from './main-panel';

class MainPanelContainer extends Component{
	render(){
		return(
			<MainPanel 
			  algoman_rop={this.props.algoman_rop}
			  setAlgomanRop={this.props.setAlgomanRop}

			  setServerinfoRop={this.props.setServerinfoRop}
			  serverinfo_rop={this.props.serverinfo_rop}
			/>
		)
	}
};


const mapStateToProps=(state)=>({
	algoman_rop:state.orderPage.algoman_rop,
	serverinfo_rop:state.orderPage.serverinfo_rop
	// ordershowmodal:state.orderPage.ordershowmodal
});

const mapActionsToProps=({
	setAlgomanRop,
	setServerinfoRop
	// setOrderShowModal
});
export default connect(mapStateToProps,mapActionsToProps,null,{forwardRef:true})(MainPanelContainer);

