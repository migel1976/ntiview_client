import {createStore, combineReducers, applyMiddleware} from 'redux';

// import thunkMiddleware from 'redux-thunk';
// import historyReducer from './historyReducer';
import orderReducer from './orderReducer';

const rootReducer=combineReducers({orderPage:orderReducer});
const store=createStore(rootReducer);
// const store=createStore(rootReducer,applyMiddleware(thunkMiddleware));

export default store;
