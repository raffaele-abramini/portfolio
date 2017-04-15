import React from 'react';
import data from '../data';

const SocialNav = ({})=>{
	const renderLinks = data.social.map(social=>(
		<a className="c-social-nav__item"
			href={social.link}>
			<svg className="c-icon">
				<use xlinkHref={`#${social.type}`} />
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