import React from 'react';
import {connect} from 'react-redux';
import PageNav from '../components/page-nav';
import {switchSectionTo, toggleNav} from '../actions/home-actions';

function mapStateToProps(state){
	const {activeSection, isNavOpen, sections} = state.home;
	return {
		activeSection,
		isNavOpen,
		homeSections : sections
	}
}

export default connect(mapStateToProps, {switchSectionTo, toggleNav})(PageNav);