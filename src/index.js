import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'; 
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
// import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';

// import App from './App.js';
import App from './components/app/app.js';
import './index.css';

ReactDOM.render( <Provider store={store}>
					<BrowserRouter>
					 <App/>
			        </BrowserRouter>
				 </Provider> 
				, document.getElementById('root'));

