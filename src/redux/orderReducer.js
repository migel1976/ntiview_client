const initialState={
	algoman_rop:null,
	account:'X',
	ticker:['AAPL','MSFT'],
	buysell:['SELL','BUY'],
	algo:['TWAP'],
	algosize:15000,
	orderitem:{},
	ordershowmodal:false
};

const SET_ORDER_ITEM='SET_ORDER_ITEM';
const SET_ORDER_SHOW_MODAL='SET_ORDER_SHOW_MODAL';

const orderReducer=(state=initialState,action)=>{
	switch(action.type){
		case SET_ORDER_ITEM:
			return {...state,orderitem:action.item}
		case SET_ORDER_SHOW_MODAL:
			return {...state,ordershowmodal:action.flag}
		default:
			return state;
	}
};

export const setOrderItem=(item)=>({
				type:SET_ORDER_ITEM,
				item});

export const setOrderShowModal=(flag)=>({
				type:SET_ORDER_SHOW_MODAL,
				flag});

export default orderReducer;
