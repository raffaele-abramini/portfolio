import React from 'react';
import {connect} from 'react-redux';
import HomeSection from '../components/home-section';

function mapStateToProps(state, {name}){
	return {
		isActive : state.home.activeSection === name
	}
}

export default connect(mapStateToProps)(HomeSection);