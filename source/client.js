import React from 'react'
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';



const history = createBrowserHistory();
import reducers from './reducers';
const store = createStore(reducers);

import Root from './root';

const App = () => {
	return <Provider store={store}>
		<Router history={history}>
			<Root/>
		</Router>
	</Provider>
};


ReactDOM.render(<App/> , document.querySelector('.app'));