import React from 'react';

const Intro = ({})=>{
    return (
		<div className="c-home-intro">
			<h1 className="c-home-intro__logo">
				<svg className="c-home-intro__logo-svg">
					<use xlinkHref="#logo"></use>
				</svg>
			</h1>

			<h2 className="c-home-intro__description">
				Web developer
			</h2>
		</div>
	)
};

export default Intro;