import OrdersApi from '../api/orders';
import moment from 'moment'

const initialState={
	algoman_rop:null,
	account:'X',
	ticker:['AAPL','MSFT'],
	buysell:['SELL','BUY'],
	algo:['TWAP'],
	algosize:12200,//количетсво заказов в модальном окне формирования заказов
	orderitem:{},
	ordershowmodal:false,//флаг для отображения модального окна формирования заказов 
	graphshowmodal:false,//флаг для отображения модального окна графика статистики
	ts:null,//timestamp получаемое от сервера
	selectionorder:[],//массив выбранных строк из таблицы order
	rowsorder:[],
	columnsorder:[],
	rowcurrentorder:{},//объект в котором хранится выбраная строка из таблицы orders

    graphorders:[],//объекты которые
};

const SET_GRAPH_ORDERS='SET_GRAPH_ORDERS';
const SET_ROW_CURRENT_ORDER='SET_ROW_CURRENT_ORDER';
const SET_ROWS_ORDER='SET_ROWS_ORDER';
const SET_COLUMNS_ORDER='SET_COLUMNS_ORDER';

const SET_ORDER_ITEM='SET_ORDER_ITEM';
const SET_ORDER_SHOW_MODAL='SET_ORDER_SHOW_MODAL';
const SET_GRAPH_SHOW_MODAL='SET_GRAPH_SHOW_MODAL';
const SET_ALGOMAN_ROP='SET_ALGOMAN_ROP';
const SET_TS='SET_TS';
const SET_SELECTION_ORDER='SET_SELECTION_ORDER';

const orderReducer=(state=initialState,action)=>{
	switch(action.type){

		case SET_GRAPH_ORDERS:
			// debugger;
			let arrObj=[];
			action.items.forEach(function(item,i,arr){
				var date=moment(item.date).format('YYYY/MM/HH hh:mm:ss');
				var date=new Date(date);
				const obj={
					     'date':date,
						 'aoid':item.aoid,
						 'avg_price':item.avg_price,
						 };
				arrObj.push(obj);
			})
			return {...state,graphorders:[...arrObj]}

		case SET_ROW_CURRENT_ORDER:
			return {...state,rowcurrentorder:action.row}
		case SET_ROWS_ORDER:
			return {...state,rowsorder:[...action.rows]}
		case SET_COLUMNS_ORDER:
			return {...state,columnsorder:[...action.columns]}
		case SET_SELECTION_ORDER:
			return {...state,selectionorder:[...action.items]}
		case SET_TS:
			return {...state,ts:action.ts}
		case SET_ALGOMAN_ROP:
			return {...state,algoman_rop:action.rop}
		case SET_ORDER_ITEM:
			return {...state,orderitem:action.item}
		case SET_ORDER_SHOW_MODAL:
			return {...state,ordershowmodal:action.flag}
		case SET_GRAPH_SHOW_MODAL:
			return {...state,graphshowmodal:action.flag}
		default:
			return state;
	}
};

const setGraphOrders=(items)=>({
					type:SET_GRAPH_ORDERS,
					items});

export const getGraphOrdersByAOID=(aoid)=>{
		return (dispatch)=>{
			OrdersApi.getItemsByAOID(aoid)
				.then(res=>{
					dispatch(setGraphOrders(res));
				})
		}
};


export const setTS=(ts)=>({
				type:SET_TS,
				ts});

export const setAlgomanRop=(rop)=>({
				type:SET_ALGOMAN_ROP,
				rop});

export const setOrderItem=(item)=>({
				type:SET_ORDER_ITEM,
				item});

export const setOrderShowModal=(flag)=>({
				type:SET_ORDER_SHOW_MODAL,
				flag});

export const setGraphShowModal=(flag)=>({
				type:SET_GRAPH_SHOW_MODAL,
				flag});

export const setSelectionOrder=(items)=>({
				type:SET_SELECTION_ORDER,
				items});

export const setRowsOrder=(rows)=>({
				type:SET_ROWS_ORDER,
				rows});

export const setColumnsOrder=(columns)=>({
				type:SET_COLUMNS_ORDER,
				columns});

export const setRowCurrentOrder=(row)=>({
				type:SET_ROW_CURRENT_ORDER,
				row});

export default orderReducer;
