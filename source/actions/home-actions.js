import {
	SWITCH_SECTION,
	TOGGLE_NAV,
	EXTEND_PORTFOLIO_SECTION,
	TOGGLE_SKILLS_ROW,
	LOAD_PORTOFOLIO_IMAGES
} from './types';

export function switchSectionTo(newSection) {
	return {
		type: SWITCH_SECTION,
		payload: newSection
	}
}

export function toggleNav(setAsOpen) {
	return {
		type: TOGGLE_NAV,
		payload: setAsOpen
	}
}

export function extendPortfolio() {
	return {
		type: EXTEND_PORTFOLIO_SECTION
	}
}

export function toggleSkillsRow(rowName) {
	return {
		type: TOGGLE_SKILLS_ROW,
		payload: rowName
	}
}

export function loadPortfolioImages() {
	return {
		type: LOAD_PORTOFOLIO_IMAGES,
	}
}