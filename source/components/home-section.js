import React from 'react';

const HomeSection = ({children, name, isActive})=>{
    return <section className="c-homepage-section o-full-height-section">
		<h1>{name} {isActive && ' is active'}</h1>
		{children}
	</section>
};

export default HomeSection;