import React from 'react';

const Intro = ({})=>{
    return (
		<div className="c-home-intro">
			<h1 className="c-home-intro__logo">
				<svg className="c-home-intro__logo-svg o-animate-on-load o-animate-on-load--1">
					<use xlinkHref="#logo"></use>
				</svg>
			</h1>

			<h2 className="c-home-intro__description o-animate-on-load o-animate-on-load--2">
				Web development
			</h2>
		</div>
	)
};

export default Intro;