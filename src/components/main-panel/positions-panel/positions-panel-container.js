// import React from 'react';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {setTS} from '../../../redux/orderReducer';
import {PositionsPanel} from './positions-panel';
import moment from 'moment';

class PositionsPanelContainer extends Component{
	constructor(props){
		super(props);
	    this.state = {columns: [], rows: []};
	}

    // refresh=(ts, df)=>{
    refresh(ts, df){
	// debugger;
	// var date=moment(ts,'YYYYMMDD hh:mm:ss').format('YYYY/MM/DD hh:mm:ss');
	// this.props.setTS(ts);
	this.props.setTS(ts);
	this.setState({
	    // ts: ts,
		columns: df.columns.map(x => {return {name: x, title:x.toUpperCase()};}),
	    rows: JSON.parse(df.dataframeJSON)
	});
    }

	render(){
		return(
			<PositionsPanel
				columns={this.state.columns}
				rows={this.state.rows}
				height={this.props.height}
				// ts={this.props.ts}
				// setTS={this.props.ts}
			/>
		)
	}
};

const mapStateToProps=(state)=>({
	ts:state.orderPage.ts
});

const mapActionsToProps=({
	setTS
});
export default connect(mapStateToProps,mapActionsToProps,null,{forwardRef:true})(PositionsPanelContainer);

