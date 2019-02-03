import express from 'express';
import path from 'path';
import fs from 'fs';
import render from './server/render';
import compression from 'compression';
import getPostsController from './server/get-posts';

const server = express();
const htmlFile = fs.readFileSync(path.join("./source/index.html"), 'utf-8');

const context={};
const compiledMarkup = (req)=> htmlFile.replace(`<div class="app"></div>`, `<div class="app">${render(context, req)}</div>`);

server.use(compression());
server.use('/assets', express.static('dist'));
server.use(express.static('.well-known'));
server.get('/get-posts', getPostsController);
server.get('*', (req, res) => {
	if (context.url) {
		res.writeHead(301, {
			Location: context.url
		});
		res.end()
	} else {
		res.write(compiledMarkup(req));
		res.end()
	}
}).listen(process.env.PORT || 8080);
