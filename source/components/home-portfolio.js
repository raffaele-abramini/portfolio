import React, { PureComponent } from 'react';
import proptypes from 'prop-types';
import classnames from 'classnames';

import PortfolioItem from './portfolio-item';


//loadPortfolioImages
class Portfolio extends PureComponent {
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

	static propTypes = {
		projects: proptypes.array.isRequired,
		isExtended: proptypes.bool.isRequired,
		extendPortfolio: proptypes.func.isRequired,
		loadPortfolioImages: proptypes.func.isRequired,
		renderPortfolioImages: proptypes.bool.isRequired
	}
}




export default Portfolio;