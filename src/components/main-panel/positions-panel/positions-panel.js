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
		{name: 'ticker', title:'ticker'},
		{name: 'account', title:'account'},
		{name: 'position', title:'position'},
		{name: 'last_price', title:'last_price'},
		{name: 'avg_price', title:'avg_price'},
		{name: 'sod_price', title:'sod_price'},
		{name: 'pnl', title:'pnl'},
		{name: 't_pnl', title:'t_pnl'},
		{name: 'sector', title:'sector'}
	  ]);

	  const { height, width } = useWindowDimensions();
	  console.log('width is width',width);
	  // debugger;
	return (
		<div className={style.main}>
		{/*<Grid rows={props.rows} columns={props.columns}>*/}
		<div className='card'>
		<Grid rows={props.rows} columns={columns}>
        <DragDropProvider />
		<CurrencyTypeProvider for={['avg_price','sod_price','last_price']} />
		<GroupingState
          defaultGrouping={[{ columnName: 'ticker' }]}
          defaultExpandedGroups={['AAPL','MSFT']}
        />
		<IntegratedGrouping />
		{/*<VirtualTable height={'200px'}/>*/}
		<VirtualTable />
		<TableHeaderRow />
		<TableGroupRow />
        <Toolbar />
        <GroupingPanel />
		</Grid>
		</div>
		</div>
	);
 }
