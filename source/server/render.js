import React from 'react';
import reactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router';
import {Provider} from 'react-redux';
import store from'../store';
import Root from '../root';

export default function(context, req){
	return reactDOMServer.renderToString(
		<Provider store={store}>
			<StaticRouter
				location={req.url}
				context={context}>
				<Root/>
			</StaticRouter>
		</Provider>
	);
}