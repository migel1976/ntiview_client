import React from 'react';
import {connect} from 'react-redux';
import {setOrderShowModal} from '../../redux/orderReducer';
import MainNavbar from './mainnavbar';

class MainNavbarContainer extends React.Component{
		render(){
			return(
				<MainNavbar 
				     setOrderShowModal={this.props.setOrderShowModal}
					 algoman_rop={this.props.algoman_rop}
				/>
			)
		}
};

const mapStateToProps=(state)=>({
	// ordershowmodal:state.orderPage.ordershowmodal
	algoman_rop:state.orderPage.algoman_rop
});

const mapActionsToProps=({
	setOrderShowModal
});
export default connect(mapStateToProps,mapActionsToProps,null,{forwardRef:true})(MainNavbarContainer);
