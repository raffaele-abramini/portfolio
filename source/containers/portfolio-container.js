import React from 'react';
import {connect} from 'react-redux';
import Portfolio from '../components/home-portfolio';

function mapStateToProps(state){
	const {projects} = state.portfolio;
	return {
		projects
	}
}

export default connect(mapStateToProps, {})(Portfolio);