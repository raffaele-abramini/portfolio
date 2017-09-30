import axios from 'axios';
import { FETCH_POSTS } from './types';

const POSTS_URL = '/get-posts';

export function fetchPosts() {
	return function(dispatch) {
		axios.get(POSTS_URL).then((data) => {
			dispatch({
				type: FETCH_POSTS,
				payload: data.data
			})
		})
	}
}