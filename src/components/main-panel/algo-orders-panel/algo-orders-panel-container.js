import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Alert} from 'reactstrap';

import {AlgoOrdersPanel} from './algo-orders-panel';
import {setGraphShowModal,setOrderShowModal,setSelectionOrder} from '../../../redux/orderReducer';
import * as NTIAlgo from '../../../gen-js/NTIAlgo.js';

class AlgoOrdersPanelContainer extends Component{
	constructor(props){
		super(props);
	    this.state = {
			columns: [],//массив заголовков данных получаемых от сервера
			rows: [],//массив данных получаемых от сервера
			flagSelection:false,//флаг disabled кнопки Cancel Orders
			// selection:[],//массив в котором хранится выбранные элементы из таблицы
			toggleSelectionGraph:false,//флаг определения режим, false-отображение диалога с графиком
		};

		this.setSelection=this.setSelection.bind(this);
		this.cancelOrder=this.cancelOrder.bind(this);
		this.setToggleSelectionGraph=this.setToggleSelectionGraph.bind(this);
		
	}

	// setSelection=(sel)=>{
	setSelection(sel){
	debugger;
	 if(this.state.toggleSelectionGraph===false){
		// this.setState({selection:sel});		
		this.props.setSelectionOrder(sel);
		if(sel.length>0){
			this.setState({flagSelection:true});
		}else
		{
			this.setState({flagSelection:false});
		}
	 }
	 else{
		// this.setState({selection:sel});		
		this.props.setSelectionOrder(sel);
		this.props.setGraphShowModal(true);
	 }
	};

	async cancelOrders(){
		// var elements=this.state.selection;
		var elements=this.props.selectionorder;
		var count=0;
		var ret;
		for(const el in elements){
			var id=elements[count];
			var objectID=this.state.rows[id].aoid;
			var rop=await this.props.comm.get_rop(NTIAlgo.AlgoOrder,this.props.ws_url,objectID);
			ret=rop.cancelAlgoOrder();
			console.log('ret is',ret);
			count++;
		};
		// this.setState({selection:[]});
		this.props.setSelectionOrder([]);
		this.setState({flagSelection:false});
	};

	// cancelOrder=()=>{
	cancelOrder(){
		this.cancelOrders();
	};

	setToggleSelectionGraph(e){
		this.setState({
			toggleSelectionGraph:e.target.checked});
		// alert(e.target.checked);
	};

    refresh(df) {
	this.setState({columns: df.columns.map(x => {return {name: x, title:x.toUpperCase()};}),
		       rows: JSON.parse(df.dataframeJSON)});
    }

	render(){
		return(
			<AlgoOrdersPanel 
			    algoman_rop={this.props.algoman_rop}	
				setOrderShowModal={this.props.setOrderShowModal}
				columns={this.state.columns}
				rows={this.state.rows}
				flagSelection={this.state.flagSelection}
				// selection={this.state.selection}
				selectionorder={this.props.selectionorder}
				setSelection={this.setSelection}
				cancelOrder={this.cancelOrder}

				setToggleSelectionGraph={this.setToggleSelectionGraph}
			    toggleSelectionGraph={this.state.toggleSelectionGraph}
			/>
		)
	}
};

const mapStateToProps=(state)=>({
	ordershowmodal:state.orderPage.ordershowmodal,
	graphshowmodal:state.orderPage.graphshowmodal,
	selectionorder:state.orderPage.selectionorder
});

const mapActionsToProps=({
	setOrderShowModal,
	setGraphShowModal,
	setSelectionOrder
});
// export default AlgoOrdersPanelContainer;
export default connect(mapStateToProps,mapActionsToProps,null,{forwardRef:true})(AlgoOrdersPanelContainer);
