import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from'./store';
import style from'./styles/style.scss';
import Root from './root';

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Root/>
			</Router>
		</Provider>
	)
};


ReactDOM.hydrate(<App/> , document.querySelector('.app'));