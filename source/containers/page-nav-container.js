import React from 'react';
import {connect} from 'react-redux';
import PageNav from '../components/page-nav';
import {switchSectionTo, toggleNav} from '../actions/home-actions';

function mapStateToProps(state){
	const {activeSection, isNavOpen} = state.home;
	return {
		activeSection,
		isNavOpen
	}
}

export default connect(mapStateToProps, {switchSectionTo, toggleNav})(PageNav);