import React from 'react';
import PropTypes from 'prop-types';

const PortfolioItem = ({title})=>{
    return <div>
		{title}
	</div>
};

PortfolioItem.PropTypes = {
	title: PropTypes.string.isRequired
};

export default PortfolioItem;