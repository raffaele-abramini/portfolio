import React from 'react';

import PortfolioItem from './portfolio-item';



const Intro = ({projects})=>{
    return <div className="c-portfolio-grid">
		{projects.map((project, index)=><PortfolioItem key={index} {...project}/>)}
	</div>
};

export default Intro;