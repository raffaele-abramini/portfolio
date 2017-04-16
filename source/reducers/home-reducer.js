import data from '../data';
import { SWITCH_SECTION, TOGGLE_NAV, EXTEND_PORTFOLIO_SECTION, TOGGLE_SKILLS_ROW } from '../actions/types';


const initialState = {
	sections: data.homeSections,
	activeSection: data.homeSections.intro,
	isNavOpen: false,
	isPortfolioExtended: false,
	openSkillsRows: []
};


export default (state = initialState, {type, payload})=>{
	switch (type){
		case SWITCH_SECTION:
			return {...state, activeSection :payload};
		case TOGGLE_NAV:
			return {...state, isNavOpen :payload};
		case EXTEND_PORTFOLIO_SECTION:
			return {...state, isPortfolioExtended :true};
		case TOGGLE_SKILLS_ROW:
			const openSkillsRows = [...state.openSkillsRows];

			if(openSkillsRows.indexOf(payload) >= 0){
				openSkillsRows.splice(openSkillsRows.indexOf(payload), 1);
			} else {
				openSkillsRows.push(payload)
			}

			return {...state, openSkillsRows};
	}
	return state;
}