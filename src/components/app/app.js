import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import MainNavbarContainer from '../mainnavbar/mainnavbar-container';
import Routes from '../routes/routes';

const App=()=>{
		return(
			<div style={{height:"300px"}}>
				<Container fluid>
					<Row>
						<Col>
							<MainNavbarContainer />
							<Routes />
						</Col>
					</Row>
					{/*<Row>*/}
						{/*<Col>*/}
							{/*<Routes />*/}
						{/*</Col>*/}
					{/*</Row>*/}
					{/*<Row>*/}
						{/*<Col>*/}
							{/*hi*/}
						{/*</Col>*/}
					{/*</Row>*/}
				</Container>
			</div>
		)
};
export default App;
