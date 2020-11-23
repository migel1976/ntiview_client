const initialState={
	algoman_rop:null,
	account:'X',
	ticker:['AAPL','MSFT'],
	buysell:['SELL','BUY'],
	algo:['TWAP'],
	algosize:15000,
	orderitem:{},
	ordershowmodal:false,
	ts:null
};

const SET_ORDER_ITEM='SET_ORDER_ITEM';
const SET_ORDER_SHOW_MODAL='SET_ORDER_SHOW_MODAL';
const SET_ALGOMAN_ROP='SET_ALGOMAN_ROP';
const SET_TS='SET_TS';

const orderReducer=(state=initialState,action)=>{
	switch(action.type){
		case SET_TS:
			return {...state,ts:action.ts}
		case SET_ALGOMAN_ROP:
			return {...state,algoman_rop:action.rop}
		case SET_ORDER_ITEM:
			return {...state,orderitem:action.item}
		case SET_ORDER_SHOW_MODAL:
			return {...state,ordershowmodal:action.flag}
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

export default orderReducer;
