import { SWITCH_SECTION } from './types';

export function switchSectionTo(payload) {
	return {
		type: SWITCH_SECTION,
		payload
	}
}