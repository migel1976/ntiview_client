import React from 'react';
import {connect} from 'react-redux';
import {setTS} from '../../../redux/orderReducer';

import {PositionsPanel} from './positions-panel';

class PositionsPanelContainer extends React.Component{
	constructor(props){
		super(props);
	    this.state = {columns: [], rows: []};
	}

    // refresh=(ts, df)=>{
    refresh(ts, df){
	this.props.setTS(ts);
	this.setState({
	    // ts: ts,
	    columns: df.columns.map(x => {return {name: x};}),
	    rows: JSON.parse(df.dataframeJSON)
	});
    }

	render(){
		return(
			<PositionsPanel
				columns={this.state.columns}
				rows={this.state.rows}
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
