import axios from 'axios';
import { parseString } from 'xml2js';
const POSTS_URL = 'https://medium.com/feed/@oldirony';

export default (req, res) => {
	axios.get(POSTS_URL)
		.then(response => {
			parseString(response.data, (err, res2) =>{
				res.send(JSON.stringify(res2.rss.channel[0].item.slice(0, 4)))
			})
		})
		.catch(err => {
			console.error(err);
			res.status(500).send({ error: 'Couldn\'t fetch posts' })
		});
}