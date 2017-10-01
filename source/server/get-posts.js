import axios from 'axios';
import { parseString } from 'xml2js';
const POSTS_URL = 'https://medium.com/feed/@oldirony';

export default (req, res) => {
	axios.get(POSTS_URL)
		.then(response => {
			parseString(response.data, (err, res2) =>{
				res.end(JSON.stringify(res2.rss.channel[0].item))
			})
		})
		.catch(response => res.end(response.data));
}