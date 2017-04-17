import React from 'react';
import PropTypes from 'prop-types';

const PortfolioItem = ({title, url, image})=>{
    return <article className="c-portfolio-item o-animate-in-view">
		<img src={image} alt={title}/>
		<div className="c-portfolio-item__inner">
			<a href={url} target="_blank">{title}</a>
		</div>
	</article>
};

PortfolioItem.PropTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired
};

export default PortfolioItem;