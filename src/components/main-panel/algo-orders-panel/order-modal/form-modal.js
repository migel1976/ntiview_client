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
				<label for="exampleFormControlInput1">Algoritm</label>
				<input type="email" class="form-control" id="exampleFormControlInput1" text={props.algo}/>
			  </div>
			  <div class="form-group">
				<label for="exampleFormControlSelect1">Example select</label>
				<SelectTicker
					value='apl'
					options={props.ticker_options}
				    changeSelectTicker={props.changeSelectTicker}	
				/>
			  </div>
			</Form>
	)
};
export default FormModal;
