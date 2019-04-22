const http = require('http'),
		fs  = require('fs'),
		url = require('url'),
		qs  = require('querystring');

http.createServer(function(req, res) {
		if(req.url != '/') { return err(res); }
		console.log(req.url);
		var urlObj = url.parse(req.url,true),
				pathname = urlObj["pathname"],
				query = urlObj["query"];
		//console.log(req.headers);
		console.log(urlObj);

		switch(req.method) {
				case 'GET':
				show(res);
				break;
				default:
				err(res);
				break;
		}


}).listen(8101);

function err(res) {
		var msg = 'Not found';
		res.writeHead(404, {
				'Content-Length': msg.length,
				'Content-Type': 'text/plain'
		});
		res.end(msg);
}

function show(res) {
		var html = fs.readFileSync('./pages/index.html').toString('utf8'),
				css = fs.readFileSync('./static/css/index.css');
				//items_html = items.map(function(item) {return '      <li>' + item + '</li>';}).join('\n');

			  //html = html.replace('%', items_html); 
		res.writeHead(200, {
				'Content-Type': 'text/html',
				'Content-Length': Buffer.byteLength(html),
				'Access-Control-Allow-Origin': '*'
		});

		res.end(html);
		res.end(css);
}

function check(req, res, pathname) {
		var reg = /\.(HTML|JS|CSS|JSON|TXT|ICO)/i;
		if(reg.test(pathname)){
				//获取请求文件的后缀名
				var suffix = reg.exec(pathname)[1].toUpperCase();
			  //根据请求文件的后缀名获取到当前文件的MIME类型
				var suffixMIME = "text/plain";//TXT文本对应的
				switch(suffix){
						case "HTML":
						suffixMIME = "text/html";
						//show(res);
						break;
						case "CSS":
						suffixMIME = "text/css";
						break;
						case "JS":
						suffixMIME = "text/javascript";
						break;
						case "JSON":
						suffixMIME = "application/json";
						break; 
						case "ICO":
						suffixMIME = "application/octet-stream";
						break;
				}
		}
		try{
				//按照指定的目录读取文件中的内容或者代码（读取出来的内容都是字符串格式的）
				var conFile = fs.readFileSync("."+pathname,"utf-8");
					  
				//重写响应头信息:告诉客户端的浏览器我返回的内容是什么样的MIME类型,指定返回的内容的格式是utf-8,避免出现乱码
				res.writeHead(200,{'content-type':suffixMIME+';charset=utf-8'})
				//服务端向客户端返回的内容也是字符串
				res.end(conFile)
		}catch(e){
				res.writeHead(404,{'content-type':'text/plain;charset=utf-8'});
				res.end("request file is not found")
		}
}
