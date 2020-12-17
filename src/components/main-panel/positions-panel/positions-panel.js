import React,{useState} from 'react';
import {
		GroupingState,
		SummaryState,
		IntegratedSummary,
} from '@devexpress/dx-react-grid';
// import "@devexpress/dx-react-grid";
// import {Grid, Table, TableHeaderRow,TableEditColumn} from "@devexpress/dx-react-grid-bootstrap4";
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
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
import style from './positions-panel.module.css';

import useWindowDimensions from '../../../hooks/dimension.hook';
import {
	IntegratedGrouping,
	IntegratedSelection,
	SelectionState,
	PagingState,
	IntegratedPaging,
	VirtualTableState,
	DataTypeProvider
} from '@devexpress/dx-react-grid';

import {
  Plugin, Template, TemplateConnector, TemplatePlaceholder,
} from '@devexpress/dx-react-core';

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

	  const [grouping]=useState([{columnName:'account'}]);
      const [tableColumnExtensions] = useState([
			{ columnName: 'amount', align: 'right' },
		  ]);
		const [totalSummaryItems] = useState([
			{ columnName: 'ticker', type: 'count' },
			{ columnName: 'pnl', type: 'max' },
			{ columnName: 'pnl', type: 'min' },
			{ columnName: 'pnl', type: 'sum' },
		  ]);
	 // const [groupSummaryItems] = useState([
		// { columnName: 'region', type: 'count' },
		// { columnName: 'amount', type: 'sum' },
		// {
		  // columnName: 'amount', type: 'sum', showInGroupFooter: false,
		// },
		// {
		  // columnName: 'amount', type: 'max', showInGroupFooter: false, alignByColumn: true,
		// },
		// // {
		// //   columnName: 'units', type: 'sum', showInGroupFooter: false, alignByColumn: true,
		// // },
	 //  ]);
	  const { height, width } = useWindowDimensions();
	  const mydimposition=height-(height-props.height);
	  console.log('mydimposition is', mydimposition);
	return (
		<div className={style.main}>
		{/*<Grid rows={props.rows} columns={props.columns}>*/}
		<div className='card'>
		{/*<Grid rows={props.rows} columns={props.columns}>*/}
		<Grid rows={props.rows} columns={columns}>
        {/*<DragDropProvider />*/}
		<CurrencyTypeProvider for={['avg_price','sod_price','last_price','pnl','t_pnl']} />
		{/*<GroupingState*/}
			 {/*grouping={grouping}*/}
        {/*/>*/}
		<SummaryState
          totalItems={totalSummaryItems}
          // groupItems={groupSummaryItems}
        />
		{/*<IntegratedGrouping />*/}
		<IntegratedSummary />
		<Table
					columnExtensions={tableColumnExtensions}
		/>
		{/*<VirtualTable */}
					{/*height={mydimposition.toString()}*/}
					{/*columnExtensions={tableColumnExtensions}*/}
		{/*/>*/}
		<TableHeaderRow />
		<TableSummaryRow />
		{/*<TableGroupRow />*/}
        {/*<Toolbar />*/}

        {/*<GroupingPanel*/}
			{/*// showColumnsWhenGrouped*/}
		{/*/>*/}

		</Grid>
		</div>
		</div>
	);
 }
