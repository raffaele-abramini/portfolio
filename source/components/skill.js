import React from 'react';

const Skill = ({name})=>{
    return <article className="c-skill">
		<svg className="c-skill__icon c-icon">
			<use xlinkHref="#cogs" />
		</svg>
		<h4 className="c-skill__title">
			{name}
		</h4>
	</article>
};

export default Skill;