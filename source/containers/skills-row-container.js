import React from 'react';
import {connect} from 'react-redux';
import {toggleSkillsRow} from '../actions/home-actions';
import SkillsRow from '../components/skills-row';

function mapStateToProps(state, {name}){
	const {openSkillsRows} = state.home;
	return {
		isOpen: openSkillsRows.indexOf(name) >= 0
	}
}

export default connect(mapStateToProps, {toggle : toggleSkillsRow})(SkillsRow);