import React from 'react';

const SelectTicker=(props)=>{
	return(
		<select 
				className='custom-select'
				onChange={props.changeSelectTicker}
		>
			{props.options}
		</select>
	)
};
export default SelectTicker;
