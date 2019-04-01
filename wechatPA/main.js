var ant = require('./antServer.js');
var handle = require('./handleServer.js');
var oauth = require('./wxoauth/wxoauth.js');

/*
    请把8200换成自己的端口号，2表示创建两个子进程处理请求，默认会根据CPU核心数量创建。
*/
ant.ants('127.0.0.1', 8000, 2);
//ant.run('localhost', 8000);
