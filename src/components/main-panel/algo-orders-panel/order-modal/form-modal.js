import React from 'react';
import {Form} from 'react-bootstrap';
import SelectTicker from './select-ticker';

const FormModal=(props)=>{
	// const changeSelectTicker=(e)=>{
	// 	var ticker=e.target.value;
	// 	debugger;
	// 	alert('ticker value is'+ticker);
	// };
	console.log('props is ', props);
	return(
			<Form>
			  <div class="form-group">
				<label>Ticker</label>
				<SelectTicker
					value={props.ticker_value}
					options={props.ticker_options}
				    changeSelectTicker={props.changeSelectTicker}	
				/>

				<label>Algoritm</label>
				<SelectTicker
					value={props.algo_value}
					options={props.algo_options}
				    changeSelectTicker={props.changeSelectAlgo}	
				/>

				<label>Type of order</label>
				<SelectTicker
					value={props.buysell_value}
					options={props.buysell_options}
				    changeSelectTicker={props.changeSelectBuysell}	
				/>
				<label>Algoritm</label>
				<input 
						type="text"
						class="form-control"
						value={props.algosize_value}
					    onChange={props.changeInputAlgosize}	
				/>
				<label>Account</label>
				<input 
						type="text"
						class="form-control"
						value={props.account_value}
					    onChange={props.changeInputAccount}	
				/>
			  </div>
			</Form>
	)
};
export default FormModal;
