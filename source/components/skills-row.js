import React from 'react';
import Skill from './skill';

const SkillsRow = ({name, skills})=>{
	const renderSkills = skills.map((skill, index)=>(
		<Skill name={skill} key={index} />
	));

    return <div className="c-skills-row">
		{name}

		<ul className="c-skills-row__list">
			{renderSkills}
		</ul>
	</div>
};

export default SkillsRow;