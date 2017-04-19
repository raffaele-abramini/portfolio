import React from 'react';
import PropTypes from 'prop-types';

const PortfolioItem = ({title, url, image, tags})=>{
    return <article className="c-portfolio-item o-animate-in-view">
		<img src={image} alt={title}/>
		<div className="c-portfolio-item__inner">
			<a href={url} target="_blank">
				{title}

				<span className="c-portfolio-item__tags">
					{tags}
				</span>
			</a>
		</div>
	</article>
};

PortfolioItem.PropTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	tags: PropTypes.string
};

export default PortfolioItem;