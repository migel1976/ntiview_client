import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Alert} from 'reactstrap';
import * as axios from 'axios';

import {AlgoOrdersPanel} from './algo-orders-panel';
import {setGraphShowModal,
		setOrderShowModal,
	    setSelectionOrder,
	    setRowsOrder,
		setColumnsOrder,
	    setRowCurrentOrder,
		getGraphOrdersByAOID
		} from '../../../redux/orderReducer';
import * as NTIAlgo from '../../../gen-js/NTIAlgo.js';

class AlgoOrdersPanelContainer extends Component{
	constructor(props){
		super(props);
	    this.state = {
			columns: [],//массив заголовков данных получаемых от сервера
			rows: [],//массив данных получаемых от сервера
			flagSelection:false,//флаг disabled кнопки Cancel Orders
			selection:[],//массив в котором хранится выбранные элементы из таблицы
			toggleSelectionGraph:false,//флаг определения режим, false-отображение диалога с графиком
			idsel:-1
		};

		this.setSelection=this.setSelection.bind(this);
		this.cancelOrder=this.cancelOrder.bind(this);
		this.setToggleSelectionGraph=this.setToggleSelectionGraph.bind(this);
		
	}

	// setSelection=(sel)=>{
	setSelection(sel){
	// debugger;
	 if(this.state.toggleSelectionGraph===false){
		this.setState({selection:sel});		
		// this.props.setSelectionOrder(sel);
		if(sel.length>0){
			this.setState({flagSelection:true});
		}else
		{
			this.setState({flagSelection:false});
		}
	 }
	 else{
		// this.setState({selection:sel});		
		// debugger;
		// var elements=sel;
		// var id=elements[0];
		var id=sel[0];
		this.setState({idsel:id});
		// var currrow=this.props.rowsorder[id];
		var currrow=this.state.rows[id];
		this.props.setRowCurrentOrder(currrow);
		// this.props.setSelectionOrder(sel);
		this.props.setGraphShowModal(true);
		this.props.getGraphOrdersByAOID(this.state.rows[id].aoid);
	 }
	};

	async cancelOrders(){
		var elements=this.state.selection;
		// var elements=this.props.selectionorder;
		var count=0;
		var ret;
		for(const el in elements){
			var id=elements[count];
			var objectID=this.state.rows[id].aoid;
			// var objectID=this.props.rowsorder[id].aoid;
			var rop=await this.props.comm.get_rop(NTIAlgo.AlgoOrder,this.props.ws_url,objectID);
			ret=rop.cancelAlgoOrder();
			console.log('ret is',ret);
			count++;
		};
		this.setState({selection:[]});
		// this.props.setSelectionOrder([]);
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

	// setData=async()=> {
	async setData(){
		try {
			let arrObj=[];
			this.state.rows.forEach(function(item, i, arr) {
			  if(item.aostate==='WORKING'){
			  var now=new Date();	
			  console.log('дата',now);
			  console.log('aoid',item.aoid);
			  console.log('avg_price',item.avg_price);
			  const obj={
						 'date':now,
						 'aoid':item.aoid,
				         'avg_price':item.avg_price
						 };
			  arrObj.push(obj);
			  }
			});
			console.log(arrObj);
			if(arrObj.length>0){
			const res = await axios.post('http://localhost:5000/orders/add',arrObj);
			const data= await res.json();
				if(!res.ok){
				   throw new Error(data.message);
			    }
				if(res.ok){console.log('save data to db was success');
				}
				console.log('save data was success in db');
		    }	
			else{
				console.log('no data to save in db');
			 }
		    }
			catch (e) {
			console.log(e.message)
			}
	}

    refresh(df) {
		// this.props.setColumnsOrder(df.columns.map(x => {return {name: x, title:x.toUpperCase()};}));
	    // this.props.setRowsOrder(JSON.parse(df.dataframeJSON));
		this.setState({columns: df.columns.map(x => {return {name: x, title:x.toUpperCase()};}),
		       rows: JSON.parse(df.dataframeJSON)});
		// this.setData();

	    if(this.state.toggleSelectionGraph===true){
				  // debugger;
			// if(this.state.selection.length>0){
				  // var id=this.state.selection[0];
			if(this.state.idsel>=0){
				  const id=this.state.idsel;
				  this.props.getGraphOrdersByAOID(this.state.rows[id].aoid);
			}
		}
    }

	render(){
		return(
			<AlgoOrdersPanel 
			    algoman_rop={this.props.algoman_rop}	
				setOrderShowModal={this.props.setOrderShowModal}

				// columns={this.props.columnsorder}
				// rows={this.props.rowsorder}
			
				columns={this.state.columns}
				rows={this.state.rows}
				flagSelection={this.state.flagSelection}
				selection={this.state.selection}
				// selectionorder={this.props.selectionorder}
				setSelection={this.setSelection}
				cancelOrder={this.cancelOrder}

				setToggleSelectionGraph={this.setToggleSelectionGraph}
			    toggleSelectionGraph={this.state.toggleSelectionGraph}

				height={this.props.height}
			/>
		)
	}
};

const mapStateToProps=(state)=>({
	ordershowmodal:state.orderPage.ordershowmodal,
	graphshowmodal:state.orderPage.graphshowmodal,
	selectionorder:state.orderPage.selectionorder,
	rowsorder:state.orderPage.rowsorder,
	columnsorder:state.orderPage.columnsorder
});

const mapActionsToProps=({
	setOrderShowModal,
	setGraphShowModal,
	setSelectionOrder,
	setRowsOrder,
	setColumnsOrder,
	setRowCurrentOrder,
	getGraphOrdersByAOID
});
// export default AlgoOrdersPanelContainer;
export default connect(mapStateToProps,mapActionsToProps,null,{forwardRef:true})(AlgoOrdersPanelContainer);
