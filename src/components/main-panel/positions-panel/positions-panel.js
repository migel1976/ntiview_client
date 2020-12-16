import React,{useState} from 'react';
import {GroupingState} from '@devexpress/dx-react-grid';
// import "@devexpress/dx-react-grid";
// import {Grid, Table, TableHeaderRow,TableEditColumn} from "@devexpress/dx-react-grid-bootstrap4";
import {Grid,
		Table,
		TableHeaderRow,
		VirtualTable,
		DragDropProvider,
		TableGroupRow,
		Toolbar,
		GroupingPanel} from "@devexpress/dx-react-grid-bootstrap4";
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

	  const { height, width } = useWindowDimensions();
	  console.log('width is width',width);
	  // debugger;
	return (
		<div className={style.main}>
		{/*<Grid rows={props.rows} columns={props.columns}>*/}
		<div className='card'>
		{/*<Grid rows={props.rows} columns={props.columns}>*/}
		<Grid rows={props.rows} columns={columns}>
        <DragDropProvider />
		<CurrencyTypeProvider for={['avg_price','sod_price','last_price']} />
		<GroupingState
          defaultGrouping={[{ columnName: 'sector' }]}
          defaultExpandedGroups={['TECH']}
          // defaultGrouping={[{ columnName: 'TICKER' }]}
          // defaultGrouping={[{ columnName: 'ticker' }]}
          // defaultExpandedGroups={['AAPL','MSFT']}
        />
		<IntegratedGrouping />
		<VirtualTable height={'200px'}/>
		{/*<VirtualTable />*/}
		<TableHeaderRow />
		<TableGroupRow />
        <Toolbar />
        <GroupingPanel />
		</Grid>
		</div>
		</div>
	);
 }
