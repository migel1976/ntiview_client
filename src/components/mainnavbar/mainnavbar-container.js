import React from 'react';
import {connect} from 'react-redux';
import {setOrderShowModal} from '../../redux/orderReducer';
import MainNavbar from './mainnavbar';

class MainNavbarContainer extends React.Component{
		render(){
			return(
				<MainNavbar 
				     setOrderShowModal={this.props.setOrderShowModal}
				/>
			)
		}
};

const mapStateToProps=(state)=>({
	// ordershowmodal:state.orderPage.ordershowmodal
});

const mapActionsToProps=({
	setOrderShowModal
});
export default connect(mapStateToProps,mapActionsToProps,null,{forwardRef:true})(MainNavbarContainer);
