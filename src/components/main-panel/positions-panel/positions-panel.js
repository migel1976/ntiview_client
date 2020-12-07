import React,{Component} from 'react';
// import { EditingState } from '@devexpress/dx-react-grid';
// import "@devexpress/dx-react-grid";
// import {Grid, Table, TableHeaderRow,TableEditColumn} from "@devexpress/dx-react-grid-bootstrap4";
import {Grid,
		Table,
		TableHeaderRow,
		VirtualTable} from "@devexpress/dx-react-grid-bootstrap4";
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
import style from './positions-panel.module.css';
import {
	IntegratedSelection,
	SelectionState,
	PagingState,
	IntegratedPaging,
	VirtualTableState,
	DataTypeProvider
} from '@devexpress/dx-react-grid';
// import {
//   Button, Modal, ModalHeader, ModalBody, ModalFooter,
//   Container, Row, Col, Label, FormGroup, Input,
// } from 'reactstrap';
import {
  Plugin, Template, TemplateConnector, TemplatePlaceholder,
} from '@devexpress/dx-react-core';
// export class PositionsPanel extends Component {
//     constructor(props) {
// 	super(props);
//     }
    
//     render() {
//
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
			  // <TemplateConnector>
				// {(
				  // {
					// rows,
					// getRowId,
					// addedRows,
					// editingRowIds,
					// createRowChange,
					// rowChanges,
				  // },
				  // {
					// changeRow, changeAddedRow, commitChangedRows, commitAddedRows,
					// stopEditRows, cancelAddedRows, cancelChangedRows,
				  // },
				// ) => {
				  // const isNew = addedRows.length > 0;
				  // let editedRow;
				  // let rowId;
				  // if (isNew) {
					// rowId = 0;
					// editedRow = addedRows[rowId];
				  // } else {
					// [rowId] = editingRowIds;
					// const targetRow = rows.filter(row => getRowId(row) === rowId)[0];
					// editedRow = { ...targetRow, ...rowChanges[rowId] };
				  // }

				  // const processValueChange = ({ target: { name, value } }) => {
					// const changeArgs = {
					  // rowId,
					  // change: createRowChange(editedRow, value, name),
					// };
					// if (isNew) {
					  // changeAddedRow(changeArgs);
					// } else {
					  // changeRow(changeArgs);
					// }
				  // };
				  // const rowIds = isNew ? [0] : editingRowIds;
				  // const applyChanges = () => {
					// if (isNew) {
					  // commitAddedRows({ rowIds });
					// } else {
					  // stopEditRows({ rowIds });
					  // commitChangedRows({ rowIds });
					// }
				  // };
				  // const cancelChanges = () => {
					// if (isNew) {
					  // cancelAddedRows({ rowIds });
					// } else {
					  // stopEditRows({ rowIds });
					  // cancelChangedRows({ rowIds });
					// }
				  // };

				  // const open = editingRowIds.length > 0 || isNew;
				  // return (
					// <Popup
					  // open={open}
					  // row={editedRow}
					  // onChange={processValueChange}
					  // onApplyChanges={applyChanges}
					  // onCancelChanges={cancelChanges}
					// />
				  // );
				// }}
			  // </TemplateConnector>
			// </Template>
			// <Template name="root">
			  // <TemplatePlaceholder />
			  // <TemplatePlaceholder name="popupEditing" />
			// </Template>
		  // </Plugin>
		// ));
		// const commitChanges = ({ added, changed }) => {
			// let changedRows;
			// // if (added) {
			// //   const startingAddedId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
			// //   changedRows = [
			// // 	...rows,
			// // 	...added.map((row, index) => ({
			// // 	  id: startingAddedId + index,
			// // 	  ...row,
			// // 	})),
			// //   ];
			// // }
			// // if (changed) {
			// //   changedRows = rows.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
			// // }
			// // setRows(changedRows);
		  // };
	return (
		<div className={style.main}>
		{/*<Grid rows={this.props.rows} columns={this.props.columns}>*/}
		<Grid rows={props.rows} columns={props.columns}>
		{/*<EditingState*/}
          {/*onCommitChanges={commitChanges}*/}
        {/*/>*/}
		<CurrencyTypeProvider for={['avg_price','sod_price','last_price']} />
		<Table />
		<VirtualTable />
		<TableHeaderRow />
		{/*<TableEditColumn*/}
          {/*showAddCommand*/}
          {/*showEditCommand*/}
        {/*/>*/}
		{/*<TableHeaderRow />*/}
		{/*<PopupEditing popupComponent={Popup} />*/}
		</Grid>
		</div>
	);
    }
// };
