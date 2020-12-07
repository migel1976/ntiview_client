import React from 'react';
// import StatContainer from '../statistic/stat-container';
// import Pybx from '../pybx/pybx';
// import PybxContainer from '../pybx/pybx-container';
import MainPanelContainer from '../main-panel/main-panel-container';
import style from './main-routes.module.css';

const MainRoutes=()=>{
	return(
		<div className={style.main}>
			<MainPanelContainer />
			{/*<Pybx />*/}
			{/*<PybxContainer />*/}
			{/*<StatContainer city={'Albany'} />*/}
		</div>
	)
};
export default MainRoutes;
