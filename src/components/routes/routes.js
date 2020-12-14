import React from 'react';
import {Route, Switch} from 'react-router-dom';
// import MainRoutes from '../main-routes/main-routes';
import MainPanelContainer from '../main-panel/main-panel-container';
const Routes=()=>{
	return(
		<Switch>
			<Route path='/' component={MainPanelContainer} />
			{/*<Route path='/' component={MainRoutes} />*/}
		</Switch>
	)
};
export default Routes;

