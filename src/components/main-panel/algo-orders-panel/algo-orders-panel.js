import React,{useState} from 'react';
import OrderModalContainer from './order-modal/order-modal-container';
import GraphModalContainer from './graph-modal/graph-modal-container'; 
import {Button, Form} from 'react-bootstrap';
import style from './algo-orders-panel.module.css';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

import {
	SortingState,
	FilteringState,
	SearchState,
	IntegratedFiltering,
	IntegratedSorting,
} from '@devexpress/dx-react-grid';

import {Grid,
		Table,
		TableHeaderRow,
		TableSelection,
		VirtualTable,
		PagingPanel,
	    TableFixedColumns,
	    Toolbar,
        SearchPanel,
		TableFilterRow,
} from "@devexpress/dx-react-grid-bootstrap4";
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
import {
	IntegratedSelection,
	SelectionState,
	PagingState,
	IntegratedPaging,
	VirtualTableState,
	DataTypeProvider,
	TableColumnResizing,
	TableColumnWidthInfo
} from '@devexpress/dx-react-grid';
import useWindowDimensions from '../../../hooks/dimension.hook';

const CurrencyFormatter = ({ value }) => (
  <b style={{ color: 'darkblue' }}>
    {value?value.toLocaleString('en-US', { style: 'currency', currency: 'USD' }):value}
  </b>
);

const CurrencyTypeProvider = props => (
  <DataTypeProvider
    formatterComponent={CurrencyFormatter}
    {...props}
  />
);

export const AlgoOrdersPanel=(props)=>{

	// openModal(){
	// 	this.props.setOrderShowModal(true);
	// };
	const [columns] = useState([
		{name: 'aoid', title:'AOID'},
		{name: 'ticker',title:'TICKER'},
		{name: 'account',title:'ACCOUNT'},
		{name: 'aoside',title:'AOSIDE'},
		{name: 'aotype',title: 'AOTYPE'},
		{name: 'aostate',title:'AOSTATE'},
		{name: 'aosize',title:'AOSIZE'},
		{name: 'avg_price',title:'AVG_PRICE'},
		{name: 'qty_done',title:'QTY_DONE'},
		{name: 'entry_price',title:'ENTRY_PRICE'},
		{name: 'start_time',title:'START_TIME'},
		{name: 'end_time',title:'END_TIME'},
	  ]);
	 // const [defaultColumnWidths] = useState([
	const [columnWidths, setColumnWidths] = useState([
		{ columnName: 'AOID', width:90},
		{ columnName: 'TICKER', width:90},
		{ columnName: 'ACCOUNT', width:110},
		{ columnName: 'AOSIDE', width:100},
		{ columnName: 'AOTYPE', width: 100},
		{ columnName: 'AOSTATE', width: 120},
		{ columnName: 'AOSIZE', width:100},
		{ columnName: 'AVG_PRICE', width:130},
		{ columnName: 'QTY_DONE', width:130},
		{ columnName: 'ENTRY_PRICE', width:150},
		{ columnName: 'START_TIME', width:150},
		{ columnName: 'END_TIME', width:150},
	  ]);
	  // console.log('debugger is props',props);
	  // debugger;
	  const { height, width } = useWindowDimensions();
	  const mydim=height-props.height-100;
	  // console.log('mydim is', mydim);
	  const [searchValue, setSearchState] = useState('');
	  const [sorting, setSorting] = useState([{ columnName: 'ticker', direction: 'asc' }]);

	return (
	    <div className={style.main}>
		<Button variant='primary' onClick={()=>props.setOrderShowModal(true)}>PLACE TEST ORDERS</Button>{' '}
		<Button variant='danger' onClick={props.cancelOrder} disabled={!props.flagSelection}>Cancel Order(s)</Button>{' '}
		 {/*<div style={{float:"right"}}> */}
		 {/*<InputGroup>*/}
			{/*<InputGroupAddon addonType="prepend">*/}
			  {/*<InputGroupText>*/}
				{/*<Input addon type="checkbox" onChange={props.setToggleSelectionGraph} />*/}
			  {/*</InputGroupText>*/}
			{/*</InputGroupAddon>*/}
			{/*<Input placeholder="show graph" disabled />*/}
		  {/*</InputGroup>*/}
		{/*</div>*/}

		{/*<Grid rows={props.rows} columns={props.columns}>*/}
		<Grid rows={props.rows} columns={columns}>
		<SortingState
			sorting={sorting}
			onSortingChange={setSorting}
		/>
		<IntegratedSorting />
		<SearchState
          value={searchValue}
          onValueChange={setSearchState}
        />
		{/*<FilteringState defaultFilters={[]} />*/}
        {/*<IntegratedFiltering />*/}

		 <SelectionState
			selection={props.selection}
			onSelectionChange={props.setSelection}
		  />
		<CurrencyTypeProvider for={['avg_price','entry_price']} />
		<IntegratedSelection />
		<VirtualTable 
		   // columnExtensions={defaultColumnWidths}
		   columnExtensions={columnWidths}
		   height={mydim.toString()}
		/>

		{/*<TableColumnResizing defaultColumnWidths={defaultColumnWidths} />*/}
		{/*<TableColumnResizing*/}
				  {/*columnWidths={columnWidths}*/}
				  {/*onColumnWidthsChange={setColumnWidths}*/}
				  {/*// resizingMode={'nextColumn'}*/}
				{/*/>*/}

		<TableHeaderRow 
			 showSortingControls
		/>
		{/*<TableFilterRow />*/}
		{/*<TableSelection showSelectAll selectByRowClick />*/}
		<TableFixedColumns 
		                  leftColumns={['start_time','stop_time']} 
		/>
		{/*<Toolbar />*/}
         {/*<SearchPanel />*/}
		</Grid>
	    </div>
	);
};

