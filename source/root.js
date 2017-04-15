import React from 'react';
import routes from './routes';
import { Route } from 'react-router-dom';


export default ()=> (
	<main>
		{routes.map(route=><Route key={route.path} {...route} />)}
	</main>
)