import React from 'react';
import Plot from 'react-plotly.js';

const PlotChart=(props)=>{
	
		function unpack(rows, key) {
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
		  xaxis: {
			autorange:true,
			// autorange: true,
		    rangeslider:{range: ['2020-01-11', '2020-31-12'],
		  },
		  yaxis: {
			autorange:true,
			type: 'linear'
		  }
		}
		};
	return (
		<div className='card'>
		  <Plot
			className='pr-3'
			data={data}
		    layout={layout}
		  />
		</div>
		);
};
export default PlotChart; 
