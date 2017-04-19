import React from 'react';
import data from '../data';

const SocialNav = ({extraClasses})=>{
	const renderLinks = data.social.map(({link, type})=>(
		<a className="c-social-nav__item"
			href={link}
		    key={type}
			target="_blank">
			<svg className="c-icon">
				<use xlinkHref={`#${type}`} />
			</svg>
		</a>
	));

    return (
    	<nav className={` c-social-nav ${extraClasses}`}>
			{renderLinks}
		</nav>
	)
};

export default SocialNav;