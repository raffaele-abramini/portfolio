import data from '../data';
import { SWITCH_SECTION, TOGGLE_NAV } from '../actions/types';


const initialState = {
	sections: data.homeSections,
	activeSection: data.homeSections.intro,
	isNavOpen: false
};


export default (state = initialState, {type, payload})=>{
	switch (type){
		case SWITCH_SECTION:
			return {...state, activeSection :payload};
		case TOGGLE_NAV:
			return {...state, isNavOpen :payload};
	}
	return state;
}