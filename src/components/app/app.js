import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import MainNavbar from '../mainnavbar/mainnavbar';
import Routes from '../routes/routes';

const App=()=>{
		return(
			<div>
				<Container fluid>
					<Row>
						<Col>
							<MainNavbar />
							<Routes />
						</Col>
					</Row>
				</Container>
			</div>
		)
};
export default App;
