import React,{useState} from 'react';
import {Button, Modal, InputGroup, FormControl} from 'react-bootstrap';
import FormModal from './form-modal';

// const FormatTicker=(props)=>{
// 	return(
// 			{props.el.symbol}
// 	)
// };

export const OrderModal=(props)=>{
    // debugger;	
	const ticker_options=props.ticker.map(el=>(
		<option key={el.symbol} value={el.symbol}>
		 {el.symbol} | company: {el.name} | sector: {el.sector}
		 {/*<FormatTicker el={el}/>*/}
		</option>
	));
	
	const buysell_options=props.buysell.map(el=>(
		<option>
		 {el}
		</option>
	));

	const algo_options=props.algo.map(el=>(
		<option key={el.strategyType} value={el.strategyType}>
		 {/*// {el} | {el}*/}
		 {el.strategyType} | desc: {el.description}
		</option>
	));

	const account_options=props.account.map(el=>(
		<option key={el.account} value={el.account}>
		 {el.account} | {el.description}
		</option>
	));

	return(
			<Modal show={props.show} onHide={props.show} >
			  <Modal.Header>
				<Modal.Title>Place Test Order</Modal.Title>
			  </Modal.Header>
			  <Modal.Body>
				<FormModal
					ticker_value={props.ticker_value}
					ticker_options={ticker_options}
					changeSelectTicker={props.changeSelectTicker}
				
					buysell_value={props.buysell_value}
					buysell_options={buysell_options}
					changeSelectBuysell={props.changeSelectBuysell}

					algo_value={props.algo_value}
					algo_options={algo_options}
					changeSelectAlgo={props.changeSelectAlgo}
					
					algosize_value={props.algosize_value}
					changeInputAlgosize={props.changeInputAlgosize}

					account_value={props.account_value}
					account_options={account_options}
					changeSelectAccount={props.changeSelectAccount}
					// account_value={props.account_value}
					// changeInputAccount={props.changeInputAccount}

					timeStart_value={props.timeStart_value}
					changeInputStartTime={props.changeInputStartTime}

					timeEnd_value={props.timeEnd_value}
					changeInputStopTime={props.changeInputStopTime}
				/>
			  </Modal.Body>

			  <Modal.Footer>
				<Button variant="secondary" onClick={props.closeForm}>Close</Button>
				<Button variant="primary" onClick={props.saveForm}>Save changes</Button>
			  </Modal.Footer>
		    </Modal>
	)
};
