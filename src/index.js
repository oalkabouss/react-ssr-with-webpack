import ReactDOMServer from 'react-dom/server';
import App from './components/App';
import * as React from 'react';
import http from 'http';

const PORT = process.env.PORT || 3000;

const requestListiner = (req, res) => {
	try {
		const date = new Date().toLocaleTimeString();
		const app = ReactDOMServer.renderToString(<App date={date} />);
		res.statusCode = 200;
		res.write(app);
	} catch(err){
		res.statusCode = 500;
		res.write(err);
	} finally {
		res.end();
	}
}

const server = http.createServer(requestListiner);

server.listen(PORT);
