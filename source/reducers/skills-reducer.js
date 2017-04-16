import data from '../data';

const initialState = {
	skillCategories: data.skillCategories
};


export default (state = initialState, {type, payload})=>{
	return state;
}