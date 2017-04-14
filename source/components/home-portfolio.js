import React from 'react';

import PortfolioItem from './portfolio-item';

const projects = [
	{
		title: "Suzuki cars"
	},
	{
		title: "Suzuki bikes"
	},
	{
		title: "Suzuki marine"
	}
];

const Intro = ({})=>{
    return <div>
		<h1>PORTFOLIO!</h1>
		{projects.map((project, index)=><PortfolioItem key={index} {...project}/>)}
	</div>
};

export default Intro;