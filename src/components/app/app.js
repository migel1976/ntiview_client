import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import MainNavbar from '../mainnavbar/mainnavbar';
import Routes from '../routes/routes';

const App=()=>{
		return(
			<div>
				<Container>
					<Row>
						<Col sm={12}>
							<MainNavbar />
						</Col>
						<Col>
							<Routes />
						</Col>
					</Row>
				</Container>
			</div>
		)
};
export default App;
