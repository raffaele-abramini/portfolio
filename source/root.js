import React from 'react';
import routes from './routes';
import { Route } from 'react-router-dom';
import Footer from './components/footer';


export default ()=> {
	window.scroll(0,0);
	return (
		<main>
			{routes.map(route=><Route key={route.path} {...route} />)}
			<Footer/>
		</main>
	)
}