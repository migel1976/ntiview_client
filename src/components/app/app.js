import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import MainNavbarContainer from '../mainnavbar/mainnavbar-container';
import Routes from '../routes/routes';
import Footer from '../footer/footer';
import style from './app.module.css';

const App=()=>{
		return(
			<div className={style.app}>
			 <MainNavbarContainer />
			 <div className={style.app_content}>
			  <Routes />
			 </div>
			 <Footer />
			{/*<div style={{height:"300px"}}>*/}
				{/*<Container fluid>*/}
					{/*<Row>*/}
						{/*<Col>*/}
							{/*<MainNavbarContainer />*/}
							{/*<Routes />*/}
						{/*</Col>*/}
					{/*</Row>*/}
				{/*</Container>*/}
			{/*</div>*/}
		  </div>
		)
};
export default App;
