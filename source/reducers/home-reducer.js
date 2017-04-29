import data from '../data';
import {
	SWITCH_SECTION,
	TOGGLE_NAV,
	EXTEND_PORTFOLIO_SECTION,
	TOGGLE_SKILLS_ROW,
	LOAD_PORTOFOLIO_IMAGES,
	UNSET_SCROLL_TRIGGERED,
	SET_ACTIVE_SECTION
} from '../actions/types';

const getName= (acc, section) =>{
	acc.push(data.homeSections[section].name);
	return acc;
};

const initialState = {
	sections: Object.keys(data.homeSections).reduce(getName, []),
	activeSection: data.homeSections.intro.name,
	isNavOpen: false,
	isPortfolioExtended: false,
	renderPortfolioImages: false,
	isScrollTriggered: false,
	openSkillsRows: []
};


export default (state = initialState, {type, payload})=>{
	switch (type){
		case SWITCH_SECTION:
			return {...state, activeSection :payload, isScrollTriggered: true};
		case SET_ACTIVE_SECTION:
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

		case LOAD_PORTOFOLIO_IMAGES:
			if(!global || !global.isClient) return state; // server shouldn't load images

			return {...state, renderPortfolioImages: true};

		case UNSET_SCROLL_TRIGGERED:
			return {...state, isScrollTriggered:false}
	}
	return state;
}