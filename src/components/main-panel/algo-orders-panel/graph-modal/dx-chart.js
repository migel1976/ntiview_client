import * as React from 'react';
import {
  Chart,
  ValueAxis,
  Title,
  LineSeries,
  Legend,
} from '@devexpress/dx-react-chart-bootstrap4';
import { ArgumentAxis } from '@devexpress/dx-react-chart-bootstrap4';
import { Plugin } from '@devexpress/dx-react-core';
import moment from 'moment'

const format = () =>((tick)=>(
	tick=moment(tick).format('mm:ss')
));

const Root = props => (
  <Legend.Root
    {...props}
    className="m-auto flex-row"
  />
);
const Item = props => (
  <Legend.Item
    {...props}
    className="flex-column"
  />
);
const Label = props => (
  <Legend.Label
    {...props}
    className="pt-2"
  />
);

const ValueLabel = (props) => {
  const { text } = props;
  return (
    <ValueAxis.Label
      {...props}
      text={`${text}`}
    />
  );
};

export default class DxChart extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
		<div>
        <Chart
		  data={this.props.graphorders}
          className="pr-3"
        >
		  <ArgumentAxis 
			// tickInterval='minute'
			tickInterval='seconds'
			tickFormat={format}
		    tickSize={30}
			// positon={'right'}
			// showTicks='false'
		  />
          <ValueAxis
            max={300}
			min={-300}
            labelComponent={ValueLabel}
          />
          <Plugin name='ser'>
			  <LineSeries
				// name="City"
				// name={this.props.city}
				valueField="avg_price"
				// valueField="temp"
				// argumentField="count"
				argumentField="date"
			  />
		  </Plugin>
          {/*<Legend position="bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} />*/}
		   {/*<Animation />*/}
        </Chart>
      </div>
    );
  }
}
