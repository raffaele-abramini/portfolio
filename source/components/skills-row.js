import React from 'react';
import Skill from './skill';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SkillsRow = ({name, skills, isOpen, toggle})=>{
	const renderSkills = skills.map((skill, index)=>(
		<Skill name={skill} key={index} />
	));
	const rowClasses = classnames({
		'c-skills-row' : true,
		'o-animate-in-view' : true,
		'o-animate-in-view--slide' : true,
		'is-open': isOpen
	});

    return (
		<div className={rowClasses}>
			<h3 className="c-skills-row__title"
				onClick={()=>toggle(name)}>
				{name}
			</h3>
			<ul className="c-skills-row__list">
				{renderSkills}
			</ul>
		</div>
	)
};

SkillsRow.propTypes = {
	name: PropTypes.string.isRequired,
	skills: PropTypes.array.isRequired,
	isOpen: PropTypes.bool.isRequired,
	toggle: PropTypes.func.isRequired
};

export default SkillsRow;