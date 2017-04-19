import data from '../data';

const initialState = {
	projects: data.projects
};


export default (state = initialState, {type, payload})=>{
	return state;
}