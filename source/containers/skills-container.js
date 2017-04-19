import React from 'react';
import {connect} from 'react-redux';
import SkillSection from '../components/home-skills';

function mapStateToProps(state){
	const {skillCategories} = state.skills;
	return {
		skillCategories
	}
}

export default connect(mapStateToProps, {})(SkillSection);