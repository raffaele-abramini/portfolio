import React from 'react';

import PortfolioItem from './portfolio-item';



const Intro = ({projects})=>{
    return <div>
		<h1>PORTFOLIO!</h1>
		{projects.map((project, index)=><PortfolioItem key={index} {...project}/>)}
	</div>
};

export default Intro;