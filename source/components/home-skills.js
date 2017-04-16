import React from 'react';
import SkillsRow from '../containers/skills-row-container'

const SkillSection = ({skillCategories})=>{
	const skillsRows = skillCategories.map((skillCategory, index) => (
		<SkillsRow key={index} {...skillCategory} />
	));
    return <div className="c-skills-section">
		{skillsRows}
	</div>
};

export default SkillSection;