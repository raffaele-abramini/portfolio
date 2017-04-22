import React from 'react';
import PropTypes from 'prop-types';
import SkillsRow from '../containers/skills-row-container'

const SkillSection = ({skillCategories})=>{
	const skillsRows = skillCategories.map((skillCategory, index) => (
		<SkillsRow key={index} {...skillCategory} />
	));
    return <div className="c-skills-section">
		{skillsRows}
	</div>
};

SkillSection.propTypes = {
	skillCategories: PropTypes.array.isRequired
};

export default SkillSection;