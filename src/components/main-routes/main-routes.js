import React from 'react';
import MainPanelContainer from '../main-panel/main-panel-container';
import style from './main-routes.module.css';

const MainRoutes=()=>{
	return(
		<div className={style.main}>
			<MainPanelContainer />
		</div>
	)
};
export default MainRoutes;
