import { SWITCH_SECTION } from './types';

export function switchSection(payload) {
	return {
		type: SWITCH_SECTION,
		payload
	}
}