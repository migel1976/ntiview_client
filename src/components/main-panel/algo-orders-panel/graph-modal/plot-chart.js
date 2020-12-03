import React from 'react';
import Plot from 'react-plotly.js';
// import SelectRefresh from './select-refresh/select-refresh';

const PlotChart=(props)=>{
	
		function unpack(rows, key) {
		  // debugger;
		  return rows.map(function(row) { return row[key]; });
		}
		var	data=[
			  {
				// name:props.city,
				y: unpack(props.graphorders,'avg_price'),
				x: unpack(props.graphorders,'date'),
				type: 'scatter',
			  }
			];

	    var layout = {
		  showlegend:true,
		  showtitle:false,
		  // title: props.city,
		  xaxis: {
			autorange: true,
		    rangeslider: {range: ['2020-01-11', '2020-31-12'],
		  },
		  yaxis: {
			autorange:true,
			type: 'linear'
		  }
		}
		};
	// const changeTimeRefresh=(e)=>{
	// 	const time=e.target.value;
	// 	props.setTimeRefresh(time);
	// };
	// const options=props.timeRefreshArray.map(el=>(
	// 		<option>
	// 			{el}
	// 	    </option>));
	return (
		<div className='card'>
		 {/*<div>*/}
			{/*<SelectRefresh*/}
				{/*options={options}*/}
				{/*changeTimeRefresh={changeTimeRefresh}*/}
			{/*/>*/}
		 {/*</div>*/}
		  <Plot
			className='pr-3'
			data={data}
		    layout={layout}
		  />
		</div>
		);
};
export default PlotChart; 
