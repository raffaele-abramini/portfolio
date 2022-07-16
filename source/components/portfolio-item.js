import React from 'react';
import PropTypes from 'prop-types';

const PortfolioItem = ({title, url, image, tags, renderPortfolioImages})=>{
	const renderImages = ()=>{
		return renderPortfolioImages
			? 		<img src={image} alt={title}/>
			:		<img src="/assets/images/placeholder.jpg" alt={`Loading ${title}`}/>
	};
    return <article className="c-portfolio-item o-animate-in-view">
		{renderImages()}
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

PortfolioItem.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	tags: PropTypes.string,
	renderPortfolioImages: PropTypes.bool.isRequired
};

export default PortfolioItem;