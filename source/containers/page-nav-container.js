import React from 'react';
import {connect} from 'react-redux';
import PageNav from '../components/page-nav';
import {switchSectionTo} from '../actions/home-actions';

function mapStateToProps(state, {name}){
	return {
		isActive : state.home.activeSection === name,
	}
}

export default connect(mapStateToProps, {switchSectionTo})(PageNav);