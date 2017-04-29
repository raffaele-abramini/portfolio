import React from 'react';
import {connect} from 'react-redux';
import HomeSection from '../components/home-section';
import {unsetScrollTriggered, setActiveSection} from '../actions/home-actions';

function mapStateToProps({home}, {name}){
	return {
		isActive : home.activeSection === name,
		isScrollTriggered: home.isScrollTriggered
	}
}

export default connect(mapStateToProps, {unsetScrollTriggered, setActiveSection})(HomeSection);