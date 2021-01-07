import React,{useState} from 'react';
import {Grid,
		Table,
		TableHeaderRow,
		VirtualTable,
		DragDropProvider,
		TableGroupRow,
		Toolbar,
		GroupingPanel,
		TableSummaryRow,
        SearchPanel,
} from "@devexpress/dx-react-grid-bootstrap4";
import { HighlightedCell } from './highlighted-cell';

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
	SearchState,
	IntegratedFiltering,
	SortingState,
	IntegratedSorting,
} from '@devexpress/dx-react-grid';

import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
import style from './positions-panel.module.css';

const summaryCalculator = (type, rows, getValue) => {
  if (type === 'customsum') {
    let sum=0;
    rows.forEach(element => {
      sum=sum+getValue(element);
    });
	const ret=<b style={{ color: 'red' }}>
		sum
	  </b>
    // return ret;
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

const styles = {
  tech: {
    backgroundColor: '#f5f5f5',
  },
  etf: {
    backgroundColor: '#f5f5f5',
  },
  consumer: {
    backgroundColor: '#f5f5f5',
  },
  // // health: {
  // tech: {
  //   backgroundColor: '#a2e2a4',
  // },
  // telecom: {
  //   backgroundColor: '#b3e5fc',
  // },
  // energy: {
  //   backgroundColor: '#ffcdd2',
  // },
  // insurance: {
  //   backgroundColor: '#f0f4c3',
  // },
};

const TableRow = ({ row, ...restProps }) => (
  <Table.Row
    {...restProps}
    // eslint-disable-next-line no-alert
    onClick={() => alert(JSON.stringify(row))}
    style={{
      cursor: 'pointer',
      ...styles[row.sector.toLowerCase()],
    }}
  />
);

const Cell = (props) => {
  const { column } = props;
  debugger;
  if (column.name === 'sector') {
    return <HighlightedCell {...props} />;
  }
  if (column.name === 't_pnl') {
    return <HighlightedCell {...props} />;
  }
  if (column.name === 'pnl') {
    return <HighlightedCell {...props} />;
  }
  if (column.name === 'sod_price') {
    return <HighlightedCell {...props} />;
  }
  if (column.name === 'avg_price') {
    return <HighlightedCell {...props} />;
  }
  if (column.name === 'last_price') {
    return <HighlightedCell {...props} />;
  }
  return <Table.Cell {...props} />;
};
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
		{
			columnName: 'pnl', type: 'customsum', showInGroupFooter: false, alignByColumn:true
		},
		{
			columnName: 't_pnl', type: 'customsum', showInGroupFooter: false, alignByColumn:true,
		},
		{ columnName: 'ticker', type: 'count',showInGroupFooter:false },
	  ]);
	  const { height, width } = useWindowDimensions();
	  const mydimposition=height-(height-props.height)-50;

	  const [searchValue, setSearchState] = useState('');
	  const [sorting, setSorting] = useState([{ columnName: 'ticker', direction: 'asc' }]);
	return (
		<div className={style.main}>
		<div className='card'>
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
        <IntegratedFiltering />
		<DragDropProvider />
		<CurrencyTypeProvider for={['avg_price','sod_price','last_price','pnl','t_pnl']} />
		<GroupingState
			 grouping={grouping}
			 onGroupingChange={setGrouping}
					// cellComponent={Cell}
		/>
		<SummaryState
          totalItems={totalSummaryItems}
          groupItems={groupSummaryItems}
					// cellComponent={Cell}
        />
		<IntegratedGrouping />
		<IntegratedSummary 
		  calculator={summaryCalculator}
		/>
		<VirtualTable 
					height={mydimposition.toString()}
					columnExtensions={tableColumnExtensions}
					rowComponent={TableRow}
					// cellComponent={Cell}
		/>
		<TableHeaderRow
			showSortingControls
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
		<SearchPanel />
		</Grid>
		</div>
		</div>
	);
 }
