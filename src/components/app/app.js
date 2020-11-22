import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import MainNavbarContainer from '../mainnavbar/mainnavbar-container';
import Routes from '../routes/routes';

const App=()=>{
		return(
			<div>
				<Container fluid>
					<Row>
						<Col>
							<MainNavbarContainer />
							<Routes />
						</Col>
					</Row>
				</Container>
			</div>
		)
};
export default App;
