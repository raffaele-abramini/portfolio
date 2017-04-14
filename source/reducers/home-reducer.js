import data from '../data';
import { SWITCH_SECTION } from '../actions/types';


const initialState = {
	sections: data.homeSections,
	activeSection: data.homeSections.intro
};


export default (state = initialState, {type, payload})=>{
	switch (type){
		case SWITCH_SECTION:
			return {...state, activeSection :payload}
	}
	return state;
}