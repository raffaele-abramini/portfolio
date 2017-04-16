import data from '../data';
import { SWITCH_SECTION, TOGGLE_NAV, EXTEND_PORTFOLIO_SECTION } from '../actions/types';


const initialState = {
	sections: data.homeSections,
	activeSection: data.homeSections.intro,
	isNavOpen: false,
	isPortfolioExtended: false,
	openSkillCategories: []
};


export default (state = initialState, {type, payload})=>{
	switch (type){
		case SWITCH_SECTION:
			return {...state, activeSection :payload};
		case TOGGLE_NAV:
			return {...state, isNavOpen :payload};
		case EXTEND_PORTFOLIO_SECTION:
			return {...state, isPortfolioExtended :true};
	}
	return state;
}