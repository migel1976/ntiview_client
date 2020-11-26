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
	selectionorder:[]
};

const SET_ORDER_ITEM='SET_ORDER_ITEM';
const SET_ORDER_SHOW_MODAL='SET_ORDER_SHOW_MODAL';
const SET_GRAPH_SHOW_MODAL='SET_GRAPH_SHOW_MODAL';
const SET_ALGOMAN_ROP='SET_ALGOMAN_ROP';
const SET_TS='SET_TS';
const SET_SELECTION_ORDER='SET_SELECTION_ORDER';

const orderReducer=(state=initialState,action)=>{
	switch(action.type){
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

export default orderReducer;
