import React from 'react';
import {Form} from 'react-bootstrap';
import SelectTicker from './select-ticker';

const FormModal=(props)=>{
	console.log('props is ', props);
	// debugger;
	return(
			<Form>
			  <div class="form-group">
			    <label>Start Time</label>
				<input
						class="form-control"
						style={{width:'30%', display:'inline-block',margin:'0 0 0 10'}}
					    type="time"
					    value={props.timeStart_value}
					    onChange={props.changeInputStartTime}	
				/>
			    <label
						style={{margin:'0 0 0 10'}}
						>Stop Time</label>
				<input
						class="form-control"
						style={{width:'30%', display:'inline-block', margin:'0 0 0 10'}}
					    type="time"
					    value={props.timeEnd_value}
					    onChange={props.changeInputStopTime}	
				/>
				<hr/>
				<label>Algoritm Size</label>
				<input 
						type="text"
						class="form-control"
						value={props.algosize_value}
					    onChange={props.changeInputAlgosize}	
				/>
				<hr/>

				<label>Algoritm</label>
				<SelectTicker
					value={props.algo_value}
					options={props.algo_options}
				    changeSelectTicker={props.changeSelectAlgo}	
				/>

				<hr/>
				<label>Account</label>
				<SelectTicker
					value={props.account_value}
					options={props.account_options}
				    changeSelectAccount={props.changeSelectAccount}	
				/>
				{/*<input */}
						{/*type="text"*/}
						{/*class="form-control"*/}
						{/*value={props.account_value}*/}
						{/*onChange={props.changeInputAccount}	*/}
				{/*/>*/}
		
				<hr/>
				<label>Ticker</label>
				<SelectTicker
					value={props.ticker_value}
					options={props.ticker_options}
				    changeSelectTicker={props.changeSelectTicker}	
				/>


				<hr/>
				<label>Type of order</label>
				<SelectTicker
					value={props.buysell_value}
					options={props.buysell_options}
				    changeSelectTicker={props.changeSelectBuysell}	
				/>
			  </div>
			</Form>
	)
};
export default FormModal;
