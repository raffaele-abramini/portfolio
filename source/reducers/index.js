import {combineReducers} from 'redux';
import home from './home-reducer';
import portfolio from './portfolio-reducer';
import skills from './skills-reducer';


export default combineReducers({
	home,
	portfolio,
	skills
});