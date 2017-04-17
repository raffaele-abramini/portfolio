import React from 'react'
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from'./store';
import style from'./styles/style.scss';
import Root from './root';


const history = createBrowserHistory();


const App = () => {
	return <Provider store={store}>
		<Router history={history}>
			<Root/>
		</Router>
	</Provider>
};


ReactDOM.render(<App/> , document.querySelector('.app'));