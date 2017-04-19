import express from 'express';
import path from 'path';
import fs from 'fs';
import render from './server/render';
import compression from 'compression';

const server = express();
const htmlFile = fs.readFileSync(path.join("./source/index.html"), 'utf-8');

const context={};
const compiledMarkup = (req)=> htmlFile.replace(`<div class="app"></div>`, `<div class="app">${render(context, req)}</div>`);

server.use(compression());
server.use('/assets', express.static('dist'));

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
}).listen(8080);