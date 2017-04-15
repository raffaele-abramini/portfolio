import React from 'react';
import data from '../data';

const SocialNav = ({})=>{
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
    	<nav className="c-page-nav__social-nav c-social-nav">
			{renderLinks}
		</nav>
	)
};

export default SocialNav;