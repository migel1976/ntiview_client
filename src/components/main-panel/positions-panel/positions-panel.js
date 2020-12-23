import React,{useState} from 'react';
import {Grid,
		Table,
		TableHeaderRow,
		VirtualTable,
		DragDropProvider,
		TableGroupRow,
		Toolbar,
		GroupingPanel,
		TableSummaryRow
} from "@devexpress/dx-react-grid-bootstrap4";


import useWindowDimensions from '../../../hooks/dimension.hook';
import {
	IntegratedGrouping,
	IntegratedSelection,
	SelectionState,
	PagingState,
	IntegratedPaging,
	VirtualTableState,
	DataTypeProvider,
	GroupingState,
	SummaryState,
	IntegratedSummary,
} from '@devexpress/dx-react-grid';

import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
import style from './positions-panel.module.css';

const summaryCalculator = (type, rows, getValue) => {
  if (type === 'customsum') {
    let sum=0;
    rows.forEach(element => {
      sum=sum+getValue(element);
    });
    return sum;
  }
  return IntegratedSummary.defaultCalculator(type, rows, getValue);
};

const messages = {
  customsum:''
};

const CurrencyFormatter = ({ value }) => (
  <b style={{ color: 'darkblue' }}>
    {value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
  </b>
);

const CurrencyTypeProvider = props => (
  <DataTypeProvider
    formatterComponent={CurrencyFormatter}
    {...props}
  />
);

export const PositionsPanel=(props)=>{

	const [columns] = useState([
		{name: 'ticker', title:'TICKER'},
		{name: 'account', title:'ACCOUNT'},
		{name: 'position', title:'POSITION'},
		{name: 'last_price', title:'LAST_PRICE'},
		{name: 'avg_price', title:'AVG_PRICE'},
		{name: 'sod_price', title:'SOD_PRICE'},
		{name: 'pnl', title:'PNL'},
		{name: 't_pnl', title:'T_PNL'},
		{name: 'sector', title:'SECTOR'}
	  ]);

	  const [grouping, setGrouping]=useState([{columnName:'sector'}]);

      const [tableColumnExtensions] = useState([
			{ columnName: 'account', align: 'right' },
		  ]);
		const [totalSummaryItems] = useState([
			{ columnName: 'ticker', type: 'count' },
			{ columnName: 'pnl', type: 'customsum' },
			{ columnName: 't_pnl', type: 'customsum' },
			// { columnName: 'pnl', type: 'sum' },
			// { columnName: 't_pnl', type: 'sum' },
		  ]);
	 const [groupSummaryItems] = useState([
		{ columnName: 'sector', type: 'count' },
		// { columnName: 'pnl', type: 'sum' },
		// { columnName: 'pnl', type: 'customsum' },
		// { columnName: 't_pnl', type: 'customsum' },
		{
			columnName: 'pnl', type: 'customsum', showInGroupFooter: false, alignByColumn:true,
			// columnName: 't_pnl', type: 'sum', showInGroupFooter: false, alignByColumn:true,
			// columnName: 't_pnl', type: 'customsum', showInGroupFooter: false, alignByColumn:true,
			// columnName: 'pnl', type: 'sum', showInGroupFooter: false, alignByColumn:true,
		  // columnName: 'pnl', type: 'customsum', showInGroupFooter: false,
		},
		{
			columnName: 't_pnl', type: 'customsum', showInGroupFooter: false, alignByColumn:true,
		},
		// { columnName: 'ticker', type: 'count' },
		{ columnName: 'ticker', type: 'count',showInGroupFooter:false },
	  ]);
	  const { height, width } = useWindowDimensions();
	  const mydimposition=height-(height-props.height)-50;

	return (
		<div className={style.main}>
		<div className='card'>
		{/*<Grid rows={props.rows} columns={props.columns}>*/}
		<Grid rows={props.rows} columns={columns}>
		<DragDropProvider />
		<CurrencyTypeProvider for={['avg_price','sod_price','last_price','pnl','t_pnl']} />
		<GroupingState
			 grouping={grouping}
			 onGroupingChange={setGrouping}
		/>
		<SummaryState
          totalItems={totalSummaryItems}
          groupItems={groupSummaryItems}
        />
		<IntegratedGrouping />
		<IntegratedSummary 
		  calculator={summaryCalculator}
		/>
		<VirtualTable 
					height={mydimposition.toString()}
					columnExtensions={tableColumnExtensions}
		/>
		<TableHeaderRow
		    showGroupingControls
		/>
		<TableSummaryRow
		 messages={messages}
		/>
		<TableGroupRow />
		<Toolbar />
		<GroupingPanel
			// showColumnsWhenGrouped
		    showGroupingControls
		/>
		</Grid>
		</div>
		</div>
	);
 }
