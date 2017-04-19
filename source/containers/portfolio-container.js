import React from 'react';
import {connect} from 'react-redux';
import {extendPortfolio} from '../actions/home-actions';
import Portfolio from '../components/home-portfolio';

function mapStateToProps(state){
	const {projects} = state.portfolio;
	const {isPortfolioExtended} = state.home;
	return {
		projects,
		isExtended: isPortfolioExtended
	}
}

export default connect(mapStateToProps, {extendPortfolio})(Portfolio);