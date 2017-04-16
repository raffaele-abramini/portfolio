import React from 'react';
import SkillsRow from './skills-row'

const SkillSection = ({skillCategories})=>{
	const skillsRows = skillCategories.map((skillCategory, index) => (
		<SkillsRow key={index} {...skillCategory} />
	));
    return <div>
		{skillsRows}
	</div>
};

export default SkillSection;