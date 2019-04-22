const awy = require('awy'),
			fs = require('fs');

var ant = new awy();

ant.get('/edit', async rr => {
		var html = fs.readFileSync('./pages/index.html').toString('utf8');
		rr.res.Body = html;
});

ant.run('0.0.0.0', 8110);
