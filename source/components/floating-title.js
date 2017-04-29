import React from 'react';
import PropTypes from 'prop-types';

const FloatingTitle = ({activeSection})=>{
    return (
		<h3 className="c-floating-title">
			{activeSection}
		</h3>
	);
};

FloatingTitle.propTypes = {
	activeSection: PropTypes.string.isRequired
};

export default FloatingTitle;