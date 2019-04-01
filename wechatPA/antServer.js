const awy = require('awy');// awy框架

var ant = new awy();// awy实例化

//请先运行npm i awy获取更新

//开启守护进程模式
ant.config.daemon = true;

/*
 *服务启动后，会在pid_file设置的文件写入程序的PID，
 *可以运行 kill `cat ./weixin_oauth.pid` 终止服务
*/
ant.config.pid_file = './weixin_oauth.pid';

module.exports = ant;
