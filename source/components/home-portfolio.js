import React, {Component} from 'react';
import classnames from 'classnames';

import PortfolioItem from './portfolio-item';


//loadPortfolioImages
class Portfolio extends Component{
	componentDidMount(){
		this.props.loadPortfolioImages()
	}

	render(){
		const {projects, isExtended, extendPortfolio, renderPortfolioImages} = this.props;

		const portfolioClasses = classnames({
			'c-portfolio-section':true,
			'o-portfolio-grid':true,
			'is-extended' : isExtended
		});
		return <div className={portfolioClasses}>
			{projects.map((project, index)=><PortfolioItem renderPortfolioImages={renderPortfolioImages} key={index} {...project}/>)}

			<button className="c-portfolio-section__extend"
					onClick={extendPortfolio}>
				Show more
			</button>
		</div>
	}
};




export default Portfolio;