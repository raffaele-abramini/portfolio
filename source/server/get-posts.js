import axios from 'axios';
import { parseString } from 'xml2js';
const postUrl = 'https://medium.com/feed/@oldirony?format=json';

export default (req, res) => {
	new Promise((resolve, reject) => {
		axios.get(postUrl).then(resolve).catch(reject);
	})
		.then(response => {
				parseString(response.data, (err, res2) =>{
					res.end(JSON.stringify(res2.rss.channel[0].item))
				})

		})
		.catch(response => res.end(response.data))

}