import React,{useState} from 'react';
import OrderModalContainer from './order-modal/order-modal-container';
import GraphModalContainer from './graph-modal/graph-modal-container'; 
import {Button, Form} from 'react-bootstrap';
import style from './algo-orders-panel.module.css';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import "@devexpress/dx-react-grid";
import {Grid,
		Table,
		TableHeaderRow,
		TableSelection,
		VirtualTable,
		PagingPanel,
	    TableFixedColumns

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
		{name: 'aoid', title:'aoid'},
		{name: 'ticker', title:'ticker'},
		{name: 'account', title:'account'},
		{name: 'aotype', title:'aotype'},
		{name: 'aostate', title:'aostate'},
		{name: 'start_time', title:'start_time'},
		{name: 'end_time', title:'end_time'},
		{name: 'aosize', title:'aosize'},
		{name: 'entry_price', title:'entry_price'},
		{name: 'avg_price', title:'avg_price'},
		{name: 'qty_done', title:'qty_done'}
	  ]);
	 const [defaultColumnWidths] = useState([
	// const [columnWidths, setColumnWidths] = useState([
		{ columnName: 'aoid', width:70},
		{ columnName: 'ticker', width:90},
		{ columnName: 'account', width:100},
		{ columnName: 'aotype', width: 90},
		{ columnName: 'aostate', width: 120},
		{ columnName: 'start_time', width:150},
		{ columnName: 'end_time', width:150},
		{ columnName: 'aosize', width:100},
		{ columnName: 'entry_price', width:130},
		{ columnName: 'avg_price', width:130},
		{ columnName: 'qty_done', width:130}
	  ]);
	  // console.log('debugger is props',props);
	  // debugger;
	  const { height, width } = useWindowDimensions();
	  const mydim=height-props.height-100;
	  console.log('mydim is', mydim);
	return (
	    <div className={style.main}>
		{/*<Button variant='primary' onClick={this.openModal}>PLACE TEST ORDERS</Button>{' '}*/}
		<Button variant='primary' onClick={()=>props.setOrderShowModal(true)}>PLACE TEST ORDERS</Button>{' '}
		<Button variant='danger' onClick={props.cancelOrder} disabled={!props.flagSelection}>Cancel Order(s)</Button>{' '}
		 <div style={{float:"right"}}> 
		 <InputGroup>
			<InputGroupAddon addonType="prepend">
			  <InputGroupText>
				<Input addon type="checkbox" onChange={props.setToggleSelectionGraph} />
				{/*<Input addon type="checkbox" onChange={this.openGraphModal} />*/}
			  </InputGroupText>
			</InputGroupAddon>
			<Input placeholder="show graph" disabled />
		  </InputGroup>
		</div>

		{/*<Grid rows={props.rows} columns={props.columns}>*/}
		<Grid rows={props.rows} columns={columns}>
		 <SelectionState
			selection={props.selection}
			onSelectionChange={props.setSelection}
		  />
		<CurrencyTypeProvider for={['avg_price']} />
		<IntegratedSelection />
		{/*<Table />*/}
		<VirtualTable 
		   columnExtensions={defaultColumnWidths}
		   // height={150}
		   // height={'350px'}
	       // height={height-props.height}
		   // height={props.height-height}
		   height={mydim.toString()}
		/>
		{/*<TableColumnResizing defaultColumnWidths={defaultColumnWidths} />*/}
		{/*<TableColumnResizing*/}
				  {/*// columnWidths={columnWidths}*/}
				  {/*// onColumnWidthsChange={setColumnWidths}*/}
				  {/*// resizingMode={'nextColumn'}*/}
				{/*/>*/}
		<TableHeaderRow />
		<TableSelection showSelectAll selectByRowClick />
		<TableFixedColumns 
		                  leftColumns={['start_time','stop_time']} 
		/>
		</Grid>
	    </div>
	);
};

