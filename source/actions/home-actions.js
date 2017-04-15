import { SWITCH_SECTION, TOGGLE_NAV } from './types';

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