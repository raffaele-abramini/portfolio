import React from 'react';
import PropTypes from 'prop-types';
import data from '../data';
import classnames from 'classnames';

const FloatingTitle = ({activeSection})=>{
	const {hasFloatingTitle, floatingTitleColor } = data.homeSections[Object.keys(data.homeSections).find((section)=> data.homeSections[section].name===activeSection)];

	const classes = classnames({
		"c-floating-title": true,
		"c-floating-title--white": floatingTitleColor==='white',
		"c-floating-title--black": floatingTitleColor==='black',

	});

    return (
		<h3 className={classes} aria-live="polite">
			{hasFloatingTitle && activeSection}
		</h3>
	);
};

FloatingTitle.propTypes = {
	activeSection: PropTypes.string.isRequired
};

export default FloatingTitle;