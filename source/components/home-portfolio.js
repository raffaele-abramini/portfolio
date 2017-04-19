import React from 'react';
import classnames from 'classnames';

import PortfolioItem from './portfolio-item';



const Portfolio = ({projects, isExtended, extendPortfolio})=>{
	const portfolioClasses = classnames({
		'c-portfolio-section':true,
		'o-portfolio-grid':true,
		'is-extended' : isExtended
	});
    return <div className={portfolioClasses}>
		{projects.map((project, index)=><PortfolioItem key={index} {...project}/>)}

		<button className="c-portfolio-section__extend"
				onClick={extendPortfolio}>
			Show more
		</button>
	</div>
};




export default Portfolio;