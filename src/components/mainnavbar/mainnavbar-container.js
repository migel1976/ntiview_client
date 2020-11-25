import React,{Component} from 'react';
// import React from 'react';
import {connect} from 'react-redux';
import {setOrderShowModal} from '../../redux/orderReducer';
import MainNavbar from './mainnavbar';
import moment from 'moment';

class MainNavbarContainer extends Component{
		
		render(){
			return(
				<MainNavbar 
				     setOrderShowModal={this.props.setOrderShowModal}
					 algoman_rop={this.props.algoman_rop}
				     // var date=moment(item.date).format('YYYY/MM/HH hh:mm:ss');
					 // ts={moment(this.props.ts).format('MM/DD/YYYY hh:mm:ss')}
					 ts={moment(this.props.ts,'YYYYMMDD hh:mm:ss').format('YYYY/MM/DD hh:mm:ss')}
				/>
			)
		}
};

const mapStateToProps=(state)=>({
	// ordershowmodal:state.orderPage.ordershowmodal
	algoman_rop:state.orderPage.algoman_rop,
	ts:state.orderPage.ts
});

const mapActionsToProps=({
	setOrderShowModal
});
export default connect(mapStateToProps,mapActionsToProps,null,{forwardRef:true})(MainNavbarContainer);
