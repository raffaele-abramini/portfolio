import React from 'react';
import {connect} from 'react-redux';
import {extendPortfolio,loadPortfolioImages} from '../actions/home-actions';
import Portfolio from '../components/home-portfolio';

function mapStateToProps(state){
	const {projects} = state.portfolio;
	const {isPortfolioExtended, renderPortfolioImages} = state.home;
	return {
		projects,
		isExtended: isPortfolioExtended,
		renderPortfolioImages
	}
}

export default connect(mapStateToProps, { extendPortfolio, loadPortfolioImages })(Portfolio);