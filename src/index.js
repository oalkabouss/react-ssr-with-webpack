import http from 'http';

const PORT = process.env.PORT || 3000;

const requestListiner = (req, res) => {
	try {
		res.statusCode = 200;
		res.write('Hello, World !');
	} catch(err){
		res.statusCode = 500;
		res.write(err);
	} finally {
		res.end();
	}
}

const server = http.createServer(requestListiner);

server.listen(PORT);
